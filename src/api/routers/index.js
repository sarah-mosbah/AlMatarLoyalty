import bodyParser from 'body-parser';
import cors from 'cors';
import {router as userRouter} from './users.routes.js';
export function index(app) {
  return new Promise((resolve, reject) => {
    app.use(bodyParser.json());
    app.use(cors({ origin: true, credentials: true }));
    app.use('/api/users', userRouter);
    resolve();
  });

};
