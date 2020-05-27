import { Quiz, UserData, UserSignInData, UserSingUpData, Notification } from './types'
import { AxiosResponse } from 'axios'

export enum ActionTypes {
  signInRequest = 'Sign in request',
  getUser = 'Get user',
  loadUser = 'Load user',
  loadUserSuccess = 'Load user success',
  signInFailure = 'Sign in failure',
  signOutUser = 'User signed out',
  signUpRequest = 'Sign up request',
  publishQuiz = 'Quiz is published',
  saveQuiz = 'Quiz is saved',
  getNotification = 'Get notification',
  addNotification = 'Add notification',
  removeNotification = 'Remove notification',
  handleError = 'Handle error'
}

function createAction<T, P>(type: T) {
  return (payload: P): { type: T; payload: P } => {
    return { type, payload }
  }
}

export default {
  signInRequest: createAction<ActionTypes.signInRequest, UserSignInData>(ActionTypes.signInRequest),
  getUser: createAction<ActionTypes.getUser, void>(ActionTypes.getUser),
  loadUser: createAction<ActionTypes.loadUser, void>(ActionTypes.loadUser),
  loadUserSuccess: createAction<ActionTypes.loadUserSuccess, UserData>(ActionTypes.loadUserSuccess),
  signInFailure: createAction<ActionTypes.signInFailure, void>(ActionTypes.signInFailure),
  signOutUser: createAction<ActionTypes.signOutUser, void>(ActionTypes.signOutUser),
  signUpRequest: createAction<ActionTypes.signUpRequest, UserSingUpData>(ActionTypes.signUpRequest),
  publishQuiz: createAction<ActionTypes.publishQuiz, Omit<Quiz, 'uuid'>>(ActionTypes.publishQuiz),
  saveQuiz: createAction<ActionTypes.saveQuiz, Quiz>(ActionTypes.saveQuiz),
  getNotification: createAction<ActionTypes.getNotification, Omit<Notification, 'uuid'>>(ActionTypes.getNotification),
  addNotification: createAction<ActionTypes.addNotification, Notification>(ActionTypes.addNotification),
  removeNotification: createAction<ActionTypes.removeNotification, string>(ActionTypes.removeNotification),
  handleError: createAction<ActionTypes.handleError, AxiosResponse>(ActionTypes.handleError)
}
