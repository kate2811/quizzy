import {UserData, UserLogin, UserSingUpData} from './types'

export enum ActionTypes {
  loginRequest = 'Login request',
  getUser = 'Get user',
  loadUser = 'Load user',
  loadUserSuccess = 'Load user success',
  loginFailure = 'Login failure',
  logoutUser = 'User logged out',
  signUpRequest = 'Sign up request'
}

function createAction<T, P>(type: T) {
  return (payload: P): { type: T; payload: P } => {
    return { type, payload }
  }
}

export default {
  loginRequest: createAction<ActionTypes.loginRequest, UserLogin>(ActionTypes.loginRequest),
  getUser: createAction<ActionTypes.getUser, string>(ActionTypes.getUser),
  loadUser: createAction<ActionTypes.loadUser, void>(ActionTypes.loadUser),
  loadUserSuccess: createAction<ActionTypes.loadUserSuccess, UserData>(ActionTypes.loadUserSuccess),
  loginFailure: createAction<ActionTypes.loginFailure, void>(ActionTypes.loginFailure),
  logoutUser: createAction<ActionTypes.logoutUser, void>(ActionTypes.logoutUser),
  signUpRequest: createAction<ActionTypes.signUpRequest, UserSingUpData>(ActionTypes.signUpRequest)
}
