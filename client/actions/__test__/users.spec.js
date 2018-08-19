import {
  updateUsers,
  setCurrentUser,
} from '../users';

import { UPDATE_USERS, CURRENT_USER } from '../../const/action';

describe('users action', () => {

  it('should create action to update users online', () => {
    const users = [
      {username: 'user1'},
      {username: 'user2'},
    ]
    const expectedAction = {
      type: UPDATE_USERS,
      users
    }
    expect(updateUsers(users)).toEqual(expectedAction);
  })

  it('should create action to set current user', () => {
    const user = {
      username: 'user1'
    }
    const expectedAction = {
      type: CURRENT_USER,
      user
    }
    expect(setCurrentUser(user)).toEqual(expectedAction);
  })

})
