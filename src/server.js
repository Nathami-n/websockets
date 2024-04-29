import express from 'express';
import { createServer } from "node:http";
import router from './routes/serverRouter.js';
import { Server } from 'socket.io';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

const db = await open({
    filename: 'chat.db',
    driver: sqlite3.Database
});

await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_offset TEXT UNIQUE,
        content TEXT
    );
`);


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
