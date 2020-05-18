import { model, Schema } from 'mongoose';

const Pizza = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: String,
});

export default model('Pizza', Pizza);
