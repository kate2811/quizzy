import { call, put, takeLatest, all } from 'redux-saga/effects'
import actions, { ActionTypes } from './actions'
import { getUser, getAccessToken } from '../utils/api'

function* logoutUser() {
  yield localStorage.removeItem('accessToken')
}

function* getUserData({ payload }: ReturnType<typeof actions.getUser>) {
  try {
    const response = yield call(getUser, payload)
    if (response.statusCode === 401) {
      yield put(actions.loginFailure())
      localStorage.removeItem('accessToken')
    } else {
      yield put(actions.loadUserSuccess(response))
    }
  } catch (error) {
    yield put(actions.loginFailure())
  }
}

function* loginUser({ payload }: ReturnType<typeof actions.loginRequest>) {
  try {
    const token = yield call(getAccessToken, payload)
    localStorage.setItem('accessToken', token.accessToken)
    yield put(actions.getUser(token.accessToken))
  } catch (error) {
    yield put(actions.loginFailure())
  }
}

function* Saga() {
  yield all([
    takeLatest(ActionTypes.loginRequest, loginUser),
    takeLatest(ActionTypes.getUser, getUserData),
    takeLatest(ActionTypes.logoutUser, logoutUser)
  ])
}

export default Saga
