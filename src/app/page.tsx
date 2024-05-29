import { io } from "socket.io-client";
import React, { useState, useEffect } from 'react';

const App = () => {
  const [socket, setSocket] = useState(undefined);
  const [message, setMessage] = useState('');
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const socket = io({
      autoConnect: true
    });

    setSocket(socket);

    socket.on('messageData', (messageData) => {
      setMessageData((prevMessageData) => [...prevMessageData, messageData]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <div>
        {messageData.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;
