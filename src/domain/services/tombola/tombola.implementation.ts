export interface ITombolaService {
  getTombola: () => Promise<any>;

  saveTombola: () => Promise<string>;
}
