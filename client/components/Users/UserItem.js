import React from 'react';
import { PropTypes } from 'prop-types';

import { PROFILE_TAB, CHAT_TAB } from '../../const/common';

const UserItem = ({ switchTab, username }) => {
  return (
    <div className='users-item' onClick={(e) => switchTab(PROFILE_TAB, { username })}>
      <div className='users-item-img'>
        <img src='/images/user.png' />
      </div>
      <div className='users-item-info'>
        <div className='users-item-title'>{username}</div>
        <div className='users-item-controls'>
          <span 
            className='users-item-link'
            onClick={(e) => {
              e.stopPropagation();
              switchTab(CHAT_TAB, { username });
            }}
          >Написать</span>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  switchTab: PropTypes.func,
  username: PropTypes.string,
}

export default UserItem;