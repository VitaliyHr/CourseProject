import { model, Schema } from 'mongoose';

const Order = new Schema({
  count: {
    type: Number,
    default: 1,
    required: true,
  },
  pizza: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export default model('orders', Order);
