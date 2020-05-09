import { validationResult } from 'express-validator';

export default function CheckValidation(req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new SyntaxError(error.array()));
  }
  return next();
}
