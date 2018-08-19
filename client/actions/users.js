import { UPDATE_USERS, CURRENT_USER } from '../const/action';

export function updateUsers(users) {
  return {
    type: UPDATE_USERS,
    users
  }
}

export function setCurrentUser(user) {
  return {
    type: CURRENT_USER,
    user
  }
}