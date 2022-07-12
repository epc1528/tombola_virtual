import { IUserService } from '../../../../../domain/services/user/user.implementation';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import { ok, serverError } from '../../helpers/api-response';

export class UserController implements Controller {
  constructor(private readonly testService: IUserService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.getUser(_httpRequest) });
    } catch (error) {
      return serverError(error);
    }
  }
}

export class UserSaveController implements Controller {
  constructor(private readonly testService: IUserService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.saveUser(_httpRequest) });
    } catch (error) {
      return serverError(error);
    }
  }
}

export class UserUpdateController implements Controller {
  constructor(private readonly testService: IUserService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.updateUser(_httpRequest) });
    } catch (error) {
      return serverError(error);
    }
  }
}