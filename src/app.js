import express from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';
import log4js from './middleware/log4js';
import Router from './routes';
import config from '../config/default';

const logger = log4js.getLogger();
const errLogger = log4js.getLogger('error');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(helmet());
app.disable('x-powered-by');
app.use(compression());

app.use('/image', express.static('content/image'));
app.use(`${config.URI_MOUNT}/files/pdf`, express.static('content/pdf'));


app.use(config.URI_MOUNT, Router.CreateRouter());


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res, next) => {
    if (!res.headersSent) {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
      return next();
    }
    return next();
  });
}

async function start() {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    const { PORT } = config;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    const error = 'Failed to connect to database';
    errLogger.fatal(error);
    setTimeout(() => {
      process.exit(1);
    }, 1500);
  }
}

start();
