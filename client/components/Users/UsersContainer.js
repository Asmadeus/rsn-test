
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import UserItem from './UserItem';

class UsersContainer extends Component {

  static propTypes = {
    users: PropTypes.array,
    currentUser: PropTypes.object,
    switchTab: PropTypes.func
  }

  renderUserList = () => {
    return this.props.users
      .filter(user => user.username !== this.props.currentUser.username)
      .map((user, i) => (
        <UserItem key={i} switchTab={this.props.switchTab} {...user} />
      ))
  }

  render() {
    return (
      <div className='users-list'>
        {this.renderUserList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.usersOnline,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(UsersContainer);