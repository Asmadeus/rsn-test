import { RECEIVE_MESSAGE } from '../const/action';

export function receiveMessage(data) {
  return {
    type: RECEIVE_MESSAGE,
    message: data.message,
    interlocutor: data.interlocutor
  }
}