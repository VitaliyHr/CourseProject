import { SumMatrix, RezMatrix, DoSecondArray } from '../services/calc';

export default function SumRezMatrix(req, res, next) {
  let arrays;
  let result;
  try {
    arrays = DoSecondArray(req.body.matrix);
  } catch (err) {
    const error = 'Failed to pharse arrays';
    res.status(200).json({ success: false, error });
    return next(new Error(error));
  }
  if (req.body.method === '+') {
    try {
      result = SumMatrix(arrays.finst, arrays.second);
    } catch (err) {
      const error = 'Failed to sum matrix';
      res.status(200).json({ success: false, error });
      return next(new Error(error));
    }
    if (!result) {
      const error = 'Something went wrong at sum matrix';
      res.status(200).json({ success: false, error });
      return next();
    }
    res.status(200).json({ success: true, result });
    return next();
  } 
  else if (req.body.method === '-') {
    try {
      result = RezMatrix(arrays.finst, arrays.second);
    } catch (err) {
      const error = 'Failed to rez matrix';
      res.status(200).json({ success: false, error });
      return next(new Error(error));
    }
    if (!result) {
      const error = 'Something went wrong at rez matrix';
      res.status(200).json({ success: false, error });
      return next();
    }
    res.status(200).json({ success: true, result });
    return next();
  }
}
