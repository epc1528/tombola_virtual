import { Router } from 'express';
import { AdaptRoute } from '../../../../application/adapters/route-adapter';
import { tombolaController } from '../../../../application/factories/tombola';
export const routerTombola = Router();

const tombola = new tombolaController();

routerTombola.get('/', AdaptRoute(tombola.getTombola()));

routerTombola.post('/', AdaptRoute(tombola.saveTombola()));
