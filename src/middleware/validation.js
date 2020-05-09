import { param, body } from 'express-validator';

export const ParamsCheck = [
  param('id', 'Incorrect id').isMongoId(),
];

export const BodyCheck = [
  body('count', 'Count must be a string').isNumeric().isInt(),
  body('address', 'Address must be a string').isString(),
];