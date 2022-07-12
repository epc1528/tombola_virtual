import { ITombolaService } from '../../../../../domain/services/tombola/tombola.implementation';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import { ok, serverError } from '../../helpers/api-response';

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
      return ok({ data: await this.testService.saveTombola() });
    } catch (error) {
      return serverError(error);
    }
  }
}
