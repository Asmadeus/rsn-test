import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { CHAT_TAB } from '../../const/common';

import MessageItem from './MessageItem';

class Messages extends Component {

  static propTypes = {
    messages: PropTypes.object,
    currentUser: PropTypes.object,
  }

  renderMessages = () => {
    const { messages, currentUser, switchTab } = this.props;
    if (!Object.keys(messages).length) return (
      <div className='text-info'>
        Список сообщений пуст. Выберите собеседника на странице "Пользователи".
      </div>
    );

    let messagesEl = [];
    Object.keys(messages).forEach((key) => {
      messagesEl.push(
        <MessageItem 
          key={key} 
          username={key} 
          currentUser={currentUser} 
          list={messages[key]} 
          onClick={(e) => switchTab(CHAT_TAB, {username: key})}
        />
      )
    });
    return messagesEl;
  }

  render() {
    return (
      <div className='messages'>
        {this.renderMessages()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(Messages);
