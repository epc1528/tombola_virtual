import { IUserService } from '../../../../../domain/services/user/user.implementation';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import { ok, serverError } from '../../helpers/api-response';

export class UserController implements Controller {
  constructor(private readonly testService: IUserService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: this.testService.getUser() });
    } catch (error) {
      return serverError(error);
    }
  }
}
