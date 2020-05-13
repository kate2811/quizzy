import { call, put, takeLatest, all } from 'redux-saga/effects'
import actions, { ActionTypes } from './actions'
import { getUser, getAccessToken } from '../utils/API'

function* authToken({ payload }: ReturnType<typeof actions.getUser>) {
  try {
    const user = yield call(getUser, payload)
    yield put(actions.authSuccess({ user }))
  } catch (error) {
    yield put(actions.authFailure({}))
  }
}

function* loginUser({ payload }: ReturnType<typeof actions.authRequest>) {
  try {
    const token = yield call(getAccessToken, payload)
    localStorage.setItem('accessToken', JSON.stringify(token))
    yield put(actions.getUser(token))
  } catch (error) {
    yield put(actions.authFailure({}))
  }
}

function* Saga() {
  yield all([takeLatest(ActionTypes.authRequest, loginUser), yield takeLatest(ActionTypes.getUser, authToken)])
}

export default Saga
