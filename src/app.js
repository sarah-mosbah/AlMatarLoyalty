import 'dotenv/config'
import express from 'express';
import { connect } from './database/mongoose.js';
const app = express();
const PORT =  process.env.PORT;

(async function () {
    await connect();
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`)
    });
})();