import { UserData, UserSignInData, UserSingUpData } from './types'
import createAction from '../../utils/createAction'

export enum ActionTypes {
  signInRequest = 'Sign in request',
  signUpRequest = 'Sign up request',
  getUser = 'Get user',
  loadUser = 'Load user',
  loadUserSuccess = 'Load user success',
  signInFailure = 'Sign in failure',
  signOutUser = 'User signed out',
  clearUser = 'Clear user data'
}

export const actions = {
  signInRequest: createAction<ActionTypes.signInRequest, UserSignInData>(ActionTypes.signInRequest),
  signUpRequest: createAction<ActionTypes.signUpRequest, UserSingUpData>(ActionTypes.signUpRequest),
  getUser: createAction<ActionTypes.getUser, void>(ActionTypes.getUser),
  loadUser: createAction<ActionTypes.loadUser, void>(ActionTypes.loadUser),
  loadUserSuccess: createAction<ActionTypes.loadUserSuccess, UserData>(ActionTypes.loadUserSuccess),
  signInFailure: createAction<ActionTypes.signInFailure, void>(ActionTypes.signInFailure),
  signOutUser: createAction<ActionTypes.signOutUser, void>(ActionTypes.signOutUser),
  clearUser: createAction<ActionTypes.clearUser, void>(ActionTypes.clearUser)
}
