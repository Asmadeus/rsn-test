import messages from '../messages';

import { RECEIVE_MESSAGE } from '../../const/action';

describe('messages reducer', () => {

  it('should handle RECEIVE_MESSAGE', () => {
    const initialState = {
      'user3': [
        { sender: 'user2', receiver: 'user3', message: 'text1' }
      ],
      'user1': [
        { sender: 'user1', receiver: 'user2', message: 'text2' }
      ]
    }
    const action = {
      type: RECEIVE_MESSAGE,
      interlocutor: 'user1',
      message: {
        sender: 'user2',
        receiver: 'user1',
        message: 'text3'
      }
    };
    expect(messages(initialState, action)).toEqual({
      'user3': [
        { sender: 'user2', receiver: 'user3', message: 'text1' }
      ],
      'user1': [
        { sender: 'user1', receiver: 'user2', message: 'text2' },
        { sender: 'user2', receiver: 'user1', message: 'text3' },
      ]
    });
  })

})
