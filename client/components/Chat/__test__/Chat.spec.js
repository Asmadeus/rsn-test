import React from 'react';
import { shallow } from 'enzyme';

import { Chat } from '../Chat';

const setup = (propsOverrides = {}) => {
  const props = {
    interlocutor: {username: 'user1'},
    ...propsOverrides
  };

  const wrapper = shallow(<Chat {...props} />);

  return {
    props,
    wrapper,
  }
}

describe('<Chat />', () => {

  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  })
  
  it('initial state', () => {
    const { wrapper } = setup();
    expect(wrapper.state().message).toBe('');
  })
  
  it('should handle input change', () => {
    const { wrapper } = setup();
    wrapper.find('.message-area').simulate('change', {target: {value: 'text'}});
    expect(wrapper.state().message).toBe('text');
  })

  it('should send message by click button', () => {
    const socket = {
      emit: jest.fn()
    }
    const currentUser = { username: 'user1' };
    const interlocutor = { username: 'user2' };

    const { wrapper } = setup({ socket, currentUser, interlocutor });
    wrapper.setState({message: 'hello'});

    wrapper.find('Button').simulate('click');
    expect(socket.emit).toBeCalledWith('message', {
      sender: currentUser.username,
      receiver: interlocutor.username,
      message: 'hello'
    })
  })


})
