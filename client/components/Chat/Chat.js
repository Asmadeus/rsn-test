import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Button from '../Button';

export class Chat extends Component {

  static propTypes = {
    interlocutor: PropTypes.object,
    currentUser: PropTypes.object,
  }

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({message: e.target.value});
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage = () => {
    if (!this.state.message.trim()) return;
    const { interlocutor, socket, currentUser } = this.props;
    const { message } = this.state;
    socket.emit('message', {
      sender: currentUser.username,
      receiver: interlocutor.username,
      message
    })
    this.setState({message: ''})
  }

  renderMessages = () => {
    const { messages = [], currentUser } = this.props;
    return messages.map((m,i) => (
      <div 
        key={i} 
        className={`chat-message ${ m.sender === currentUser.username ? '__other-person' : ''}`}>
        <div className='chat-message-username'>
          {m.sender}
        </div>
        <div className='chat-message-text'>
          {m.message}
        </div>
      </div>
    ))
  }

  render() {
    const { message } = this.state;
    const { username, interlocutor } = this.props;
    return (
      <div className='chat'>
        <div className='chat-top'>
          <div className='chat-title'>
            {username}
          </div>
        </div>
        <div className='chat-body'>
          {interlocutor && this.renderMessages()}
          {!interlocutor && 
            <div className='text-info'>
              Пользователь вышел из сети
            </div>
          }
        </div>
        <div className='chat-bottom'>
          <textarea 
            className='message-area'
            placeholder='Введите сообщение' 
            onChange={this.handleChange} 
            onKeyPress={this.handleKeyPress}
            value={message} 
          />
          <Button 
            onClick={this.sendMessage}
            primary
          >Отправить</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const interlocutor = state.users.usersOnline.find(u => u.username === ownProps.username);

  return {
    interlocutor,
    currentUser: state.users.currentUser,
    messages: state.messages[ownProps.username]
  }
}

export default connect(mapStateToProps)(Chat);