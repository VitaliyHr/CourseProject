import { MultiplyMatrix, DoSecondArray } from '../services/calc';

export default function MnojMatrix(req, res, next) {
  let arrays;
  let result;
  try {
    arrays = DoSecondArray(req.body.matrix);
  } catch (err) {
    const error = 'Failed to parse array in MnojMatrix';
    res.status(500).json({ success: false, error });
    return next(new Error(error));
  }
  if (!arrays) {
    const error = 'Failed to parse array in MnojMatrix';
    res.status(400).json({ success: false, error });
    return next();
  }
  try {
    result = MultiplyMatrix(arrays.finst, arrays.second);
  } catch (err) {
    const error = 'Failed to multiply matrix';
    res.status(500).json({ success: false, error });
    return next(new Error(error));
  }
  if (!result) {
    const error = 'Failed to get array in MnojMatrix';
    res.status(400).json({ success: false, error });
    return next();
  }

  res.status(200).json({ success: true, result });
  return next();
}
