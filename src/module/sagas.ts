import { call, put, takeLatest, all } from 'redux-saga/effects'
import actions, { ActionTypes } from './actions'
import { getUserData, login } from '../utils/api'

function* logoutUser() {
  yield localStorage.removeItem('accessToken')
}

function* getUser({ payload }: ReturnType<typeof actions.getUser>) {
  try {
    const response = yield call(getUserData, payload)
    yield put(actions.loadUserSuccess(response))
  } catch (error) {
    yield put(actions.loginFailure())
  }
}

function* loginUser({ payload }: ReturnType<typeof actions.loginRequest>) {
  try {
    const token = yield call(login, payload)
    localStorage.setItem('accessToken', token.accessToken)
    yield put(actions.getUser(token.accessToken))
  } catch (error) {
    yield put(actions.loginFailure())
  }
}

function* Saga() {
  yield all([
    takeLatest(ActionTypes.loginRequest, loginUser),
    takeLatest(ActionTypes.getUser, getUser),
    takeLatest(ActionTypes.logoutUser, logoutUser)
  ])
}

export default Saga
