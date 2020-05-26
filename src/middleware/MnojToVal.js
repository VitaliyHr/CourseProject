import { DoOneArray, multMatrixNumber } from '../services/calc';

export default function MnojToValue(req, res, next) {
  let array;
  let result;
  try {
    array = DoOneArray(req.body.matrix);
  } catch (err) {
    const error = 'Failed to parse array in MnojToValue';
    res.status(200).json({ success: false, error });
    return next(new Error(error));
  }
  if (!array) {
    const error = 'Failed to parse array in MnojToValue';
    res.status(200).json({ success: false, error });
    return next();
  }
  try {
    result = multMatrixNumber(req.body.value, array);
  } catch (err) {
    const error = 'Failed to mult matrix';
    res.status(200).json({ success: false, error });
    return next(new Error(error));
  }
  if (!result) {
    const error = 'Failed to get array in MnojToValue';
    res.status(200).json({ success: false, error });
    return next();
  }

  res.status(200).json({ success: true, result });
  return next();
}
