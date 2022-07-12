import { HttpRequest } from '../../../infrastructure/entry-points/api/interfaces';
export interface IUserService {
  getUser: (_httpRequest:HttpRequest) => Promise<any>;

  saveUser: (_httpRequest:HttpRequest) => Promise<any>;

  updateUser: (_httpRequest:HttpRequest) => Promise<any>;
}