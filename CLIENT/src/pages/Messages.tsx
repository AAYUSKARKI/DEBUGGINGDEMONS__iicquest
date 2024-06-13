import React, { useEffect, useState } from 'react';
import { createChat, getChat } from './api'; // Update path as necessary
import socket from './socket';

const Messages = ({ receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const chatData = await getChat(receiverId);
      setMessages(chatData.data);
    };

    fetchMessages();

    socket.on('chat', (newChat) => {
      setMessages((prevMessages) => [...prevMessages, newChat]);
    });

    return () => {
      socket.off('chat');
    };
  }, [receiverId]);

  const handleSendMessage = async () => {
    const sender = 'currentUserId'; // Replace with the actual sender ID
    await createChat(sender, receiverId, newMessage);
    setNewMessage('');
  };

  return (
    <div>
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg._id} className="message">
            <div className="message-sender">{msg.senderid}</div>
            <div className="message-content">{msg.message}</div>
          </div>
        ))}
      </div>
      <div className="send-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
