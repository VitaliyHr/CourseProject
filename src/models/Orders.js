import { model, Schema } from 'mongoose';

const Order = new Schema({
  count: {
    type: Number,
    default: 1,
    required: true,
  },
  pizza: {
    type: Schema.Types.ObjectId,
    ref: 'Pizza',
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: Date,
});

export default model('orders', Order);
