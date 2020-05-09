import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import compression from 'compression';
import helmet from 'helmet';
import log4js from './middleware/log4js';
import Pizza from './routes/pizza';

const logger = log4js.getLogger();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.disable('x-powered-by');
app.use(compression());
app.use('/image', express.static('image'));


app.use('/pizza', Pizza);

const start = async () => {
  await mongoose.connect(config.get('MONGO_URI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const PORT = config.get('PORT');
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};

start();
