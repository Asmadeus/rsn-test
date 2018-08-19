import React from 'react';
import { PropTypes } from 'prop-types';

const MessageItem = ({
  username,
  list = [],
  currentUser,
  onClick
}) => {
  const last = list[list.length - 1];
  return (
    <div className='messages-item' onClick={onClick}>
      <div className='messages-item-img'>
        <img src='/images/user.png' />
      </div>
      <div className='messages-item-info'>
        <div className='messages-item-info-title'>
          {username}
        </div>
        <div className='messages-item-info-subtitle'>
          {currentUser.username === last.sender ? 'Вы: ' : ''}
          {last.message}
        </div>
      </div>
    </div>
  )
}

MessageItem.propTypes = {
  username: PropTypes.string,
  list: PropTypes.array,
  currentUser: PropTypes.object,
  onClick: PropTypes.func,
}

export default MessageItem;