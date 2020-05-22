import { Router } from 'express';
import { GetPizza, GetById, CreateOrder } from '../controllers/pizza';
import ErrorHandler from '../middleware/error.Handler';
import { BodyCheck, ParamsCheck } from '../middleware/validation';


function CreateRouter() {
  const app = Router();

  app.get('/', GetPizza, ErrorHandler);

  app.get('/:id', ParamsCheck, GetById, ErrorHandler);

  app.post('/buy/:id', BodyCheck, CreateOrder, ErrorHandler);

  return app;
}

export default {
  CreateRouter,
};
