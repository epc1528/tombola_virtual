import { TombolaRepository } from '../../../infrastructure/repositories/tombola.repository';
import { ITombolaService } from './tombola.implementation';

export class TombolaService implements ITombolaService {
  constructor(private readonly tombolaRepository: TombolaRepository) {}

  getTombola = () => {
    return this.tombolaRepository.find();
  };

  saveTombola = async () => {
    const tombolaRecord = await this.tombolaRepository.create({
      name: 'test'
    });
    console.log(tombolaRecord);
    return 'succes';
  };
}
