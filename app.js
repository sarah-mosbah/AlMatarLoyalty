import 'dotenv/config'
import express from 'express';
import { connect } from './src/database/mongoose.js';
import { index } from './src/api/routers/index.js';

const app = express();
const PORT =  process.env.PORT;

(async function () {
    await connect();
    await index(app);
   
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`)
    });
})();