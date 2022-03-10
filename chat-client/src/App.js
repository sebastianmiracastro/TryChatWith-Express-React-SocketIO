import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import React, {useEffect, useState} from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';


function App() {

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:5000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
