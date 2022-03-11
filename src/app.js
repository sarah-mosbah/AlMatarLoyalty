import 'dotenv/config'
import express from 'express';
import { connect } from './database/mongoose.js';
import { index } from './api/routers/index.js';
import {router as userRouter} from './api/routers/users.routes.js';
const app = express();
const PORT =  process.env.PORT;

(async function () {
    await connect();
    await index(app);
    app.use('/api/users', userRouter);
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`)
    });
})();