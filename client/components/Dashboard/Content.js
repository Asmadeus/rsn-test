import React from 'react';
import { PropTypes } from 'prop-types';

import { PROFILE_TAB, MESSAGES_TAB, USERS_TAB, CHAT_TAB } from '../../const/common';

import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import UsersContainer from '../Users/UsersContainer';
import Chat from '../Chat/Chat';

const CONTENT_TABS = {
  [PROFILE_TAB]: Profile,
  [MESSAGES_TAB]: Messages,
  [USERS_TAB]: UsersContainer,
  [CHAT_TAB]: Chat,
}

const Content = ({ tab, switchTab, socket, tabProps = {} }) => {
  const Component = CONTENT_TABS[tab];
  return (
    <div className='dashboard-content'>
      <Component 
        switchTab={switchTab}
        socket={socket}
        {...tabProps}
      />
    </div>
  )
}

Content.propTypes = {
  tab: PropTypes.number,
  switchTab: PropTypes.func,
  tabProps: PropTypes.object,
  socket: PropTypes.object,
}

export default Content;