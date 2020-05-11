import { Router } from 'express';
import Pizza from './pizza';

function CreateRouter() {
  const app = Router();

  app.use('/pizza', Pizza.CreateRouter());

  // send 404 error if routes not found
  app.use((req, res, next) => {
    if (!res.headersSent) {
      res.status(404).json({ success: false, error: 'Page not found' });
    }
    return next();
  });
  return app;
}

export default {
  CreateRouter,
};
