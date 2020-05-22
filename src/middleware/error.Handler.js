import log4js from './log4js';

const logger = log4js.getLogger('error');


export default function ErrHandler(err, req, res, next) {
  if (err) {
    logger.error(err);
    return next();
  }
  return next();
}
