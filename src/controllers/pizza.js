import { GetPizzas, GetPizzaByID } from '../services/Pizza';

export async function GetPizza(req, res, next) {
  let pizzas;
  try {
    pizzas = await GetPizzas();
  } catch (err) {
    const error = 'Failed to get pizzas';
    res.status(500).json({ success: false, error });
    return next(new Error(error));
  }
  if (!pizzas) {
    const error = 'Not found';
    res.status(404).json({ success: false, error });
    return next();
  }
  res.status(200).json({ success: true, pizzas });
  return next();
}


export async function GetById(req, res, next) {
  let pizza;
  const { id } = req.body;
  try {
    pizza = await GetPizzaByID(id);
  } catch (err) {
    const error = `Failed to get pizza by id ${id}`;
    res.status(500).json({ success: false, error });
    return next(new Error(error));
  }
  if (!pizza) {
    res.status(404).json({ success: false, error: `Not found pizza by id ${id}` });
    return next();
  }
  res.status(200).json({ success: true, pizza });
  return next();
}


export async function CreateOrder(req, res, next) {
  const { id } = req.params;
  const { count, address } = req.body;
  
}
