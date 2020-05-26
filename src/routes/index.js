import { Router } from 'express';
import Pizza from './pizza';
import Calculator from './calc';

function CreateRouter() {
  const app = Router();

  app.use('/pizza', Pizza.CreateRouter());

  app.use('/calc', Calculator.CreateRouter());

  return app;
}

export default {
  CreateRouter,
};
