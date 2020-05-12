import express from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import helmet from 'helmet';
import log4js from './middleware/log4js';
import Router from './routes';
import config from './config/default';

const logger = log4js.getLogger();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(helmet());
app.disable('x-powered-by');
app.use(compression());

app.use('/image', express.static('image'));


app.use(config.Uri_Mount, Router.CreateRouter());

const start = async () => {
  await mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const { PORT } = config;
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};

start();
