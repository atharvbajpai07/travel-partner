// src/components/Messaging.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const MessagingContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const MessageList = styled.div`
  margin-top: 20px;
`;

const MessageItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

function Messaging() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMessages([
        { id: 1, sender: 'John Doe', message: 'Hi there! Are you available for travel next month?' },
        { id: 2, sender: 'Jane Smith', message: 'Hello! I would like to discuss the travel plans.' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleMessageSend = (e) => {
    e.preventDefault();
    const newMessage = { id: messages.length + 1, sender: recipient, message };
    setMessages([...messages, newMessage]);
    setRecipient('');
    setMessage('');
  };

  return (
    loading ? <Loading /> : 
    <MessagingContainer>
      <h1>Messaging</h1>
      <MessageForm onSubmit={handleMessageSend}>
        <Input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Recipient" required />
        <TextArea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
        <Button type="submit">Send</Button>
      </MessageForm>
      <h2>Messages</h2>
      <MessageList>
        {messages.map((msg) => (
          <MessageItem key={msg.id}>
            <h3>{msg.sender}</h3>
            <p>{msg.message}</p>
          </MessageItem>
        ))}
      </MessageList>
    </MessagingContainer>
  );
}

export default Messaging;
