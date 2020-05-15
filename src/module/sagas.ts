import { call, put, takeLatest, all } from 'redux-saga/effects'
import actions, { ActionTypes } from './actions'
import {getUserData, login, signUp} from '../utils/api'
import {customHistory} from "../history"

function* logoutUser() {
  yield localStorage.removeItem('accessToken')
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

function* loginUser({ payload }: ReturnType<typeof actions.loginRequest>) {
  try {
    const token = yield call(login, payload)
    localStorage.setItem('accessToken', token.accessToken)
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

function* Saga() {
  yield all([
    takeLatest(ActionTypes.loginRequest, loginUser),
    takeLatest(ActionTypes.getUser, getUser),
    takeLatest(ActionTypes.logoutUser, logoutUser),
    takeLatest(ActionTypes.signUpRequest, signUpUser),
  ])
}

export default Saga
