import React from 'react';
import { PropTypes } from 'prop-types';

import { PROFILE_TAB, USERS_TAB, MESSAGES_TAB } from '../../const/common';

import MenuItem from './MenuItem';


const Sidebar = ({ switchTab, menuIsOpen }) => {
  return (
    <div className={`dashboard-sidebar ${menuIsOpen ? '__open' : ''}`}>
      <div className='menu'>
        <MenuItem onClick={() => switchTab(PROFILE_TAB)}> 
          Моя страница
        </MenuItem>

        <MenuItem onClick={() => switchTab(MESSAGES_TAB)}>
          Мои сообщения
        </MenuItem>

        <MenuItem onClick={() => switchTab(USERS_TAB)}>
          Пользователи
        </MenuItem>
      </div>
    </div>
  )
}


Sidebar.propTypes = {
  switchTab: PropTypes.func,
  menuIsOpen: PropTypes.bool,
}

export default Sidebar;