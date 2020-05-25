import { call, put, takeLatest, all } from 'redux-saga/effects'
import actions, { ActionTypes } from './actions'
import { getUserData, signIn, signUp, saveQuiz } from '../utils/api'
import { customHistory } from '../history'
import { v4 as uuidv4 } from 'uuid'

function* signOutUser() {
  yield localStorage.removeItem('accessToken')
  yield sessionStorage.removeItem('accessToken')
}

function* getUser({ payload }: ReturnType<typeof actions.getUser>) {
  try {
    const response = yield call(getUserData, payload)
    yield put(actions.loadUserSuccess(response))
    customHistory.push('/')
  } catch (error) {
    console.log('token error')
  }
}

function* signInUser({ payload }: ReturnType<typeof actions.signInRequest>) {
  try {
    const token = yield call(signIn, { email: payload.email, password: payload.password })
    payload.isRemember
      ? localStorage.setItem('accessToken', token.accessToken)
      : sessionStorage.setItem('accessToken', token.accessToken)
    yield put(actions.getUser(token.accessToken))
  } catch (error) {
    alert('Login request has failed, please try again')
  }
}

function* signUpUser({ payload }: ReturnType<typeof actions.signUpRequest>) {
  try {
    const token = yield call(signUp, payload)
    yield put(actions.getUser(token.accessToken))
  } catch (error) {
    alert('Sign up request has failed, please try again')
  }
}

function* publishQuiz({ payload }: ReturnType<typeof actions.publishQuiz>) {
  try {
    const uuid = yield uuidv4()
    const quiz = { uuid, ...payload }
    yield call(saveQuiz, quiz)
    customHistory.push('/')
  } catch (error) {
    alert('Error. Quiz is not saved')
  }
}

function* Saga() {
  yield all([
    takeLatest(ActionTypes.signInRequest, signInUser),
    takeLatest(ActionTypes.getUser, getUser),
    takeLatest(ActionTypes.signOutUser, signOutUser),
    takeLatest(ActionTypes.signUpRequest, signUpUser),
    takeLatest(ActionTypes.publishQuiz, publishQuiz)
  ])
}

export default Saga
