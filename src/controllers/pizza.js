import { validationResult } from 'express-validator';
import { GetPizzas, GetPizzaByID } from '../services/Pizza';
import NewOrder from '../services/order';
import SendEmail from '../services/email';

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
    const error = 'Not found pizzas';
    res.status(404).json({ success: false, error });
    return next();
  }
  res.status(200).json({ success: true, pizzas });
  return next();
}


export async function GetById(req, res, next) {
  const ValidationError = validationResult(req);
  if (!ValidationError.isEmpty()) {
    const error = ValidationError.array()[0].msg;
<<<<<<< HEAD
    res.status(200).json({ success: false, error });
=======
    res.status(422).json({ success: false, error });
>>>>>>> backend
    return next(new SyntaxError(error));
  }
  let pizza;
  const { id } = req.params;
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
  const ValidationError = validationResult(req);
  if (!ValidationError.isEmpty()) {
    const error = ValidationError.array()[0].msg;
<<<<<<< HEAD
    res.status(200).json({ success: false, error });
=======
    res.status(422).json({ success: false, error });
>>>>>>> backend
    return next(new SyntaxError(error));
  }
  const { id } = req.params;
  const { count, address, email } = req.body;
  let order;
  let pizza;

  try {
    pizza = await GetPizzaByID(id);
  } catch (err) {
    const error = `Failed to find pizza by id ${id}`;
    res.status(500).json({ success: false, error });
    return next(new Error(error));
  }
  if (!pizza) {
    res.status(404).json({ success: false, error: `Not found pizza by id ${id}` });
    return next();
  }
  const price = pizza.price * count;

  try {
    order = await (await NewOrder(count, id, address, email, price)).populate('pizza').execPopulate();
  } catch (err) {
    const error = 'Failed to save order';
    res.status(500).json({ success: false, error });
    return next(new Error(error));
  }

  try {
    await SendEmail(email, order, pizza.name);
  } catch (err) {
    const error = `Failed to send email to user ${email}`;
    res.status(500).json({ success: false, error });
    return next(new Error(error));
  }

  res.status(201).json({ success: true, order });

  return next();
}
