import { param, body } from 'express-validator';

export const ParamsCheck = [
  param('id', 'Incorrect url').isMongoId(),
];

export const BodyCheck = [
  body('count', 'Incorrect count').isNumeric().isInt(),
  body('address', 'Incorrect adress').isString(),
  body('email', 'Incorrect email').isEmail().trim(),
];

export const CalcCheck = [
  body('method').isString().notEmpty().withMessage('Invalid method'),
  body('matrix').notEmpty().withMessage('Incorrect matrix'),
];

export const MultMatrix = [
  body('value').isInt().notEmpty().withMessage('Incorrect value'),
  body('matrix').notEmpty().withMessage('Incorrect matrix'),
];

export const MnojMatrix = [
  body('matrix').notEmpty().withMessage('Incorrect first matrix'),
];

export const PowMatrix = [
  body('value').isInt().notEmpty().withMessage('Incorrect value'),
  body('matrix').notEmpty().withMessage('Incorrect matrix'),
];
