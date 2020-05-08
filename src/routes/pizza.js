import { Router } from 'express';
import { GetPizza, GetById } from '../controllers/pizza';

const app = Router();

app.get('/', GetPizza);

app.get('/:id', GetById);

app.post('/buy/:id');


export default app;
