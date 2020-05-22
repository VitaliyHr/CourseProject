import { param, body } from 'express-validator';

export const ParamsCheck = [
  param('id', 'Incorrect url').isMongoId(),
];

export const BodyCheck = [
  body('count', 'Incorrect count').isNumeric().isInt(),
  body('address', 'Incorrect adress').isString(),
  body('email', 'Incorrect email').isEmail().trim(),
];
