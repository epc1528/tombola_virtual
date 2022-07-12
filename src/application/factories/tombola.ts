import { TombolaService } from '../../domain/services';
import { TombolaRepository } from '../../infrastructure/repositories/tombola.repository';
import {
  TombolaController,
  TombolaDeleteController,
  TombolaResultController,
  TombolaSaveController,
  TombolaUpdateController
} from '../../infrastructure/entry-points/api/v1/tombola/tombola.controller';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

export class tombolaController {
  getTombola(): TombolaController {
    const tombolaRepository = new TombolaRepository('tombola');
    const userRepository = new UserRepository('user')
    const tombolaService = new TombolaService(tombolaRepository, userRepository);
    const tombolaController = new TombolaController(tombolaService);
    return tombolaController;
  }

  saveTombola(): TombolaSaveController {
    const tombolaRepository = new TombolaRepository('tombola');
    const userRepository = new UserRepository('user')
    const tombolaService = new TombolaService(tombolaRepository, userRepository);
    const tombolaController = new TombolaSaveController(tombolaService);
    return tombolaController;
  }

  updateTombola(): TombolaUpdateController {
    const tombolaRepository = new TombolaRepository('tombola');
    const userRepository = new UserRepository('user')
    const tombolaService = new TombolaService(tombolaRepository, userRepository);
    const tombolaController = new TombolaUpdateController(tombolaService);
    return tombolaController;
  }

  deleteTombola(): TombolaDeleteController {
    const tombolaRepository = new TombolaRepository('tombola');
    const userRepository = new UserRepository('user')
    const tombolaService = new TombolaService(tombolaRepository, userRepository);
    const tombolaController = new TombolaDeleteController(tombolaService);
    return tombolaController;
  }

  getResultTombola(): TombolaResultController {
    const tombolaRepository = new TombolaRepository('tombola');
    const userRepository = new UserRepository('user')
    const tombolaService = new TombolaService(tombolaRepository, userRepository);
    const tombolaController = new TombolaResultController(tombolaService);
    return tombolaController;
  }
}
