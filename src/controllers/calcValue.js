import { validationResult } from 'express-validator';
import MnojToValue from '../middleware/MnojToVal';

export default function CalcMnoj(req, res, next) {
  const ValidationError = validationResult(req);
  if (!ValidationError.isEmpty()) {
    const error = ValidationError.array()[0].msg;
    res.status(200).json({ success: false, error });
    return next(new SyntaxError(error));
  }

  if (req.body.value && req.body.matrix) {
    return MnojToValue(req, res, next);
  }
  res.status(400).json({ success: false, error: 'Invalid method at mnoj to value' });
  return next();
}
