import { HttpRequest } from '../../../infrastructure/entry-points/api/interfaces';
export interface ITombolaService {
  getTombola: () => Promise<any>;

  saveTombola: (_httpRequest:HttpRequest) => Promise<any>;

  updateTombola: (_httpRequest:HttpRequest) => Promise<any>;

  deleteTombola: (_httpRequest:HttpRequest) => Promise<any>;

  getResultTombola: (_httpRequest:HttpRequest) => Promise<any>;
}
