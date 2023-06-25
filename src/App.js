import React, { useState } from 'react';
import './App.css';
import InputEmoji from 'react-input-emoji';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (text) => {
    setMessage(text);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: message,
        likes: 0,
        timestamp: new Date() // Store the current date and time
        };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleLikeMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);
  };

  const handleOnEnter = (text) => {
    setMessage(text);
    handleSendMessage();
  };

  return (
    <div className="chat-container">
    <div className="left-column">
      <div className="chat-item-3">
        <div className="circle">
          <span>RR</span>
        </div>
        <div className="chat-info">
          <div className="chat-name">Ronalde Raimondi</div>
          <div className="chat-description">Research Nurse</div>
        </div>
      </div>
      <div className="chat-item-2">
      <div className="chat-name-1">Conversations</div>
      <div className="chat-info">
          <div className="circle-1">+</div>
        </div>
      </div>
      <div className="chat-item-4">
        <div className="square">#</div>
        <div className="chat-info">
          <div className="chat-name">Poland Office</div>
        </div>
      </div>
      <div className="chat-item-1">
        <div className="square highlighted">#</div>
        <div className="chat-info">
          <div className="chat-name-highlighted">Introductions</div>
          <div className="chat-description"></div>
        </div>
      </div>
      <div className="chat-item-5">
        <div className="square">#</div>
        <div className="chat-info">
          <div className="chat-name">India Office</div>
        </div>
      </div>
    </div>
    <div className="right-column">
      <div className="chat-header">
        <div className="chat-info">
          <div className="chat-name">Introductions</div>
          <div className="chat-description">This Channel Is For Company Wide Chatter</div>
        </div>
        <div className="contact-info">
          <div className="contact-count">3</div>
          <div className="contact-symbol">|</div>
          <div className="contact-total">100</div>
          <span className="groups-symbol">&#x1F465;</span>
        </div>
      </div>
      <div className="messages-container">
        <div className="message-history">
          {messages.map((msg, index) => (
            <div className="message" key={index}>
              <div className="user">{msg.user}</div>
              <div className="timestamp">{msg.timestamp.toLocaleTimeString()}</div>
              <div className="text">{msg.text}</div>
              <div className="likes">
                <button className="like-button" onClick={() => handleLikeMessage(index)}>
                &#x2764; ({msg.likes})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
          <InputEmoji
            value={message}
            onChange={handleInputChange}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message..."
          />
        </div>
      </div>
    </div>
  );
};
export default App;
