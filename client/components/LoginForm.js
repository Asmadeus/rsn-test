import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Input from './Input';
import Button from './Button';

class LoginForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    username: ''
  }

  handleChange = (e) => {
    this.setState({username: e.target.value});
  }

  submit = (e) => {
    e.preventDefault();
    const {username} = this.state;
    this.props.onSubmit({
      username
    })
  }

  render() {
    const { username } = this.state;
    

    return (
      <form className='form-login' onSubmit={this.submit}>
        <Input 
          onChange={this.handleChange} 
          value={username}
          placeholder='Имя пользователя' 
          block
        />
        <Button type='submit' block primary>Войти</Button>
      </form>
    )
  }
}

export default LoginForm;