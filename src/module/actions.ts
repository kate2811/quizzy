import {Token, UserData, UserLogin} from "./types"

export enum ActionTypes {
  loginUser = 'User is logged in',
  authRequest = 'Auth request',
  authSuccess = 'Auth Success',
  authFailure= 'Auth Failure',
  getUser = 'Get User'

}

function createAction<T, P>(type: T) {
  return (payload: P): { type: T; payload: P } => {
    return { type, payload }
  }
}

export default {
  loginUser: createAction<ActionTypes.loginUser, UserData>(ActionTypes.loginUser),
  authRequest: createAction<ActionTypes.authRequest, UserLogin>(ActionTypes.authRequest),
  authSuccess: createAction(ActionTypes.authSuccess),
  authFailure: createAction(ActionTypes.authFailure),
  getUser: createAction<ActionTypes.getUser, Token>(ActionTypes.getUser)
}
