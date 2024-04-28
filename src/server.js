import express from 'express';
import { createServer } from "node:http";
import router from './routes/serverRouter.js';
const app = express();
const server = createServer(app);


app.use('/', router);



server.listen(3000, ()=> {
    console.log('listening on port 3000');
});
