import Pizza from '../models/Pizza';

export async function GetPizzas() {
  let pizzas;
  try {
    pizzas = await Pizza.find();
  } catch (err) {
    const error = 'Failed to find pizzas';
    throw new Error(error);
  }
  return pizzas;
}

export async function GetPizzaByID(id) {
  let pizza;
  try {
    pizza = await Pizza.findById(id);
  } catch (err) {
    const error = `Failed to find pizza by id ${id}`;
    throw new Error(error);
  }
  return pizza;
}
