import {
  receiveMessage
} from '../messages';

import { RECEIVE_MESSAGE } from '../../const/action';

describe('messages action', () => {

  it('should create action to receive message', () => {
    const data = { 
      message: {
        sender: 'user1',
        receiver: 'user2',
        message: 'text'
      },
      interlocutor: 'user1'
    };
    const expectedAction = {
      type: RECEIVE_MESSAGE,
      ...data
    }
    expect(receiveMessage(data)).toEqual(expectedAction);
  })

})
