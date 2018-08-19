import users from '../users';

import { UPDATE_USERS, CURRENT_USER } from '../../const/action';

describe('users reducer', () => {

  it('should handle UPDATE_USERS', () => {
    const initialState = { }
    const action = {
      type: UPDATE_USERS,
      users: [{username: 'user1'}, {username: 'user2'}]
    };
    expect(users(initialState, action)).toEqual({
      usersOnline: action.users
    });
  })

  it('should handle CURRENT_USER', () => {
    const initialState = { }
    const action = {
      type: CURRENT_USER,
      user: {username: 'user1'}
    };
    expect(users(initialState, action)).toEqual({
      currentUser: action.user
    });
  })

})
