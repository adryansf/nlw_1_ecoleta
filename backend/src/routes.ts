import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

const routes = Router();

const upload = multer(multerConfig);

// Controllers
import ItemsController from './app/controllers/ItemsController';
import PointsController from './app/controllers/PointsController';

// Validations
import validateCreatePoint from './app/validation/createPoint';

routes.get('/items', ItemsController.index);

routes.get('/points/:id', PointsController.show);
routes.get('/points', PointsController.index);
routes.post(
  '/points',
  upload.single('image'),
  validateCreatePoint,
  PointsController.store
);

export default routes;
