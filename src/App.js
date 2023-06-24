import React, { useState } from 'react';
import './App.css';


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const emojis = ["😀", "😃", "😄", "😊", "😎", "😍", "🥳", "🤩", "😘", "🤗"];

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: message,
        likes: 0
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

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="left-column">
        <div className="chat-item">
          <div className="circle">
            <span>+</span>
          </div>
          <div className="chat-info">
            <div className="chat-name">Conversations</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="square">#</div>
          <div className="chat-info">
            <div className="chat-name">Poland Office</div>
          </div>
        </div>
        <div className="chat-item1">
          <div className="square highlighted">#</div>
          <div className="chat-info">
            <div className="chat-name-highlighted">Introductions</div>
            <div className="chat-description"></div>
          </div>
        </div>
        <div className="chat-item">
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
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="emoji-dropdown">
            <button className="emoji-button" onClick={() => handleEmojiSelect(selectedEmoji)}>
              {selectedEmoji ? selectedEmoji : "😊"}
            </button>
            {selectedEmoji && (
              <div className="emoji-menu">
                {emojis.map((emoji, index) => (
                  <div
                    className="emoji-option"
                    key={index}
                    onClick={() => handleEmojiSelect(emoji)}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
