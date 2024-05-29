'use client'
import { createServer } from 'http';
import { Server } from 'socket.io';


const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:3001'], // Example: Replace with your client's origin
        methods: ['GET', 'POST']
    }
});

io.on('connection',async (socket) => {
        console.log(socket.id)
    
    // Handle incoming messages, etc.
});

httpServer.listen(5000, () => {
    console.log('Connected');
});

export {
    io
}