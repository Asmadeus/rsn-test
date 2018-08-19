import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Button from '../Button';
import { CHAT_TAB } from '../../const/common';

class Profile extends Component {

  static propTypes = {
    data: PropTypes.object,
    currentUser: PropTypes.object,
  }

  render() {
    const { data, switchTab, currentUser } = this.props;
    if (!data) return null;
    return (
      <div className='profile'>
        <div className='profile-top'>
          <div className='profile-img'>
            <img src='/images/user.png' />
          </div>
          <div className='profile-info'>
            <div className='profile-title'>
              {data.username}
            </div>
            <div className='profile-subtitle'>
              Статус пользователя
            </div>
          </div>
        </div>
        {currentUser.username !== data.username &&
          <Button 
            block 
            primary 
            onClick={(e) => switchTab(CHAT_TAB, {username: data.username})}
          >
            Личное сообщение
          </Button>
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  
  return {
    data: ownProps.username ?
      state.users.usersOnline.find(u => u.username === ownProps.username) :
      state.users.currentUser,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(Profile);