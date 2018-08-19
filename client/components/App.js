import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { PropTypes } from 'prop-types';

import LoginForm from './LoginForm';
import NavBar from './NavBar';
import Dashboard from './Dashboard/Dashboard';

import { updateUsers, setCurrentUser } from '../actions/users';
import { receiveMessage } from '../actions/messages';

export class App extends Component {

  static propTypes = {
    updateUsers: PropTypes.func,
    setCurrentUser: PropTypes.func,
    currentUser: PropTypes.object,
  }

  state = {
    menuIsOpen: false
  }

  logIn = (data) => {
    this.props.setCurrentUser(data);

    this.socket = io();
    this.socket.on('connect', () => {
      
      this.socket.emit('new user', data.username);

      this.socket.on('users', (users) => {
        this.props.updateUsers(Object.values(users));
      })

      this.socket.on('message', (message) => {
        const interlocutor = message.sender !== data.username ? message.sender : message.receiver;

        this.props.receiveMessage({
          interlocutor,
          message
        });
      })
    });
  }

  toggleMenu = (state) => {
    this.setState({ menuIsOpen: typeof state !== 'boolean' ? !this.state.menuIsOpen : state});
  }

  render() {
    const { currentUser } = this.props;
    const { menuIsOpen } = this.state;

    return (
      <main className='main'>
        <NavBar authorized={!!currentUser} toggleMenu={this.toggleMenu} />
        { currentUser ?
          <Dashboard menuIsOpen={menuIsOpen} socket={this.socket} toggleMenu={this.toggleMenu} />
        :
          <LoginForm
            onSubmit={this.logIn}
          />
        }
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUsers: (users) => dispatch(updateUsers(users)),
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
  }

}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));