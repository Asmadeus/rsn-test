import { RECEIVE_MESSAGE } from "../const/action";

const initialState = {
  
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        [action.interlocutor]: (state[action.interlocutor] || []).concat(action.message)
      }
    default:
      return state;
  }
}

export default messages;