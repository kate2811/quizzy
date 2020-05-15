import {UserData, UserSignInData, UserSingUpData} from './types'

export enum ActionTypes {
  signInRequest = 'Sign in request',
  getUser = 'Get user',
  loadUser = 'Load user',
  loadUserSuccess = 'Load user success',
  signInFailure = 'Sign in failure',
  signOutUser = 'User signed out',
  signUpRequest = 'Sign up request'
}

function createAction<T, P>(type: T) {
  return (payload: P): { type: T; payload: P } => {
    return { type, payload }
  }
}

export default {
  signInRequest: createAction<ActionTypes.signInRequest, UserSignInData>(ActionTypes.signInRequest),
  getUser: createAction<ActionTypes.getUser, string>(ActionTypes.getUser),
  loadUser: createAction<ActionTypes.loadUser, void>(ActionTypes.loadUser),
  loadUserSuccess: createAction<ActionTypes.loadUserSuccess, UserData>(ActionTypes.loadUserSuccess),
  signInFailure: createAction<ActionTypes.signInFailure, void>(ActionTypes.signInFailure),
  signOutUser: createAction<ActionTypes.signOutUser, void>(ActionTypes.signOutUser),
  signUpRequest: createAction<ActionTypes.signUpRequest, UserSingUpData>(ActionTypes.signUpRequest)
}
