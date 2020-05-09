import { validationResult } from 'express-validator';
import log4js from './log4js';

const logger = log4js.getLogger('error');

export default async function CheckValidation(req, res, next) {
  const error = await validationResult(req);
  if (!error.isEmpty()) {
    logger.error(error.array());
    return next();
  }
  return next();
}
