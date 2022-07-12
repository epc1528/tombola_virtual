import { ITombolaService } from '../../../../../domain/services/tombola/tombola.implementation';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import { badRequest, ok, serverError } from '../../helpers/api-response';

export class TombolaController implements Controller {
  constructor(private readonly testService: ITombolaService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.getTombola() });
    } catch (error) {
      return serverError(error);
    }
  }
}

export class TombolaSaveController implements Controller {
  constructor(private readonly testService: ITombolaService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.saveTombola(_httpRequest) });
    } catch (error) {
      return serverError(error);
    }
  }
}

export class TombolaUpdateController implements Controller {
  constructor(private readonly testService: ITombolaService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.updateTombola(_httpRequest) });
    } catch (error) {
      return serverError(error);
    }
  }
}

export class TombolaDeleteController implements Controller {
  constructor(private readonly testService: ITombolaService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.deleteTombola(_httpRequest) });
    } catch (error) {
      return serverError(error);
    }
  }
}

export class TombolaResultController implements Controller {
  constructor(private readonly testService: ITombolaService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const resultData = await this.testService.getResultTombola(_httpRequest)
      console.log(resultData)
      if(resultData.code = 4) return badRequest(resultData.message)
      return ok({ data:  resultData.message});
    } catch (error) {
      return serverError(error);
    }
  }
}