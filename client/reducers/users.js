import { UPDATE_USERS, CURRENT_USER } from "../const/action";

const initialState = {
  currentUser: null,
  usersOnline: []
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        usersOnline: action.users
      }
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      }
    default:
      return state;
  }
}

export default users;