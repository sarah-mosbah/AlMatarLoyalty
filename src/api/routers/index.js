import bodyParser from 'body-parser';
import cors from 'cors';

export function index(app) {

  return new Promise((resolve, reject) => {

    app.use(bodyParser.json());
    app.use(cors({ origin: true, credentials: true }));
    resolve();

  })

};
