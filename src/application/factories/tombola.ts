import { TombolaService } from '../../domain/services';
import { TombolaRepository } from '../../infrastructure/repositories/tombola.repository';
import {
  TombolaController,
  TombolaSaveController
} from '../../infrastructure/entry-points/api/v1/tombola/tombola.controller';

export class tombolaController {
  getTombola(): TombolaController {
    const tombolaRepository = new TombolaRepository();
    const tombolaService = new TombolaService(tombolaRepository);
    const tombolaController = new TombolaController(tombolaService);
    return tombolaController;
  }

  saveTombola(): TombolaSaveController {
    const tombolaRepository = new TombolaRepository();
    const tombolaService = new TombolaService(tombolaRepository);
    const tombolaController = new TombolaSaveController(tombolaService);
    return tombolaController;
  }
}
