import express from 'express';
import { createServer } from "node:http";
import router from './routes/serverRouter.js';
import { Server } from 'socket.io';


const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
});

app.use('/', router);

io.on('connection', (socket) => {
    socket.on('chat message', (msg)=> {
        console.log("message: " + msg);
        io.emit('chat message', `server says: ${msg}`);
    })
});




server.listen(3000, ()=> {
    console.log('listening on port 3000');
});
