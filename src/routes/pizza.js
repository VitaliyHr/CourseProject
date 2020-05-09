import { Router } from 'express';
import { GetPizza, GetById, CreateOrder } from '../controllers/pizza';
import ErrorHandler from '../middleware/error.Handler';
import { BodyCheck, ParamsCheck } from '../middleware/validation';
import CheckValidator from '../middleware/CheckValidator';

const app = Router();

app.get('/', GetPizza, ErrorHandler);

app.get('/:id', ParamsCheck, CheckValidator, GetById, ErrorHandler);

app.post('/buy/:id', BodyCheck, CheckValidator, CreateOrder, ErrorHandler);


export default app;
