import { Router } from 'express';
import CalcMatrix from '../controllers/calcSum';
import ErrorHandler from '../middleware/error.Handler';
import { CalcCheck, MultMatrix, MnojMatrix, PowMatrix } from '../middleware/validation';
import MnojToValue from '../controllers/calcValue';
import MnojToMatrix from '../controllers/MnojMatrix';
import MatrixPow from '../controllers/Pow';

const CreateRouter = () => {
  const app = Router();

  app.post('/', CalcCheck, CalcMatrix, ErrorHandler);

  app.post('/mnojtovalue', MultMatrix, MnojToValue, ErrorHandler);

  app.post('/mnoj', MnojMatrix, MnojToMatrix, ErrorHandler);

  app.post('/pow', PowMatrix, MatrixPow, ErrorHandler)

  return app;
};

export default {
  CreateRouter,
};
