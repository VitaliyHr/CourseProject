import { validationResult } from 'express-validator';
import SumResMatrix from '../middleware/sumResMatrix';

export default function CalcMatrix(req, res, next) {
  const ValidationError = validationResult(req);
  if (!ValidationError.isEmpty()) {
    const error = ValidationError.array()[0].msg;
    res.status(200).json({ success: false, error });
    return next(new SyntaxError(error));
  }
  if (req.body.method === '-' || '+') {
    return SumResMatrix(req, res, next);
  }
  res.status(400).json({ success: false, error: 'Invalid method' });
  return next();
}
