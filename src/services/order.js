import Order from '../models/Orders';

export default async function NewOrder(count, pizza, address, email, price) {
  const createdAt = new Date();
  const order = new Order({
    count, pizza, address, email, price, createdAt,
  });
  try {
    await order.save();
  } catch (err) {
    const error = 'Failed to save order';
    throw new Error(error);
  }
  return order;
}
