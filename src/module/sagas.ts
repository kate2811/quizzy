import { call, put, delay, takeLatest, select, takeEvery, all } from 'redux-saga/effects'
import actions, { ActionTypes } from './actions'
import { getUserData, signIn, signUp, saveQuiz, handleError } from '../utils/api'
import { customHistory } from '../history'
import { v4 as uuidv4 } from 'uuid'

function* signOutUser() {
  yield localStorage.removeItem('accessToken')
  yield sessionStorage.removeItem('accessToken')
}

function* getUser() {
  try {
    const response = yield call(getUserData)
    yield put(actions.loadUserSuccess(response))
    customHistory.push('/')
  } catch (error) {
    yield call(handleError, error)
  }
}

function* signInUser({ payload }: ReturnType<typeof actions.signInRequest>) {
  try {
    const token = yield call(signIn, { email: payload.email, password: payload.password })
    yield put(actions.loadUser())
    payload.isRemember
      ? yield localStorage.setItem('accessToken', token.accessToken)
      : yield sessionStorage.setItem('accessToken', token.accessToken)
    yield put(actions.getUser())
  } catch (error) {
    yield call(handleError, error)
  }
}

function* signUpUser({ payload }: ReturnType<typeof actions.signUpRequest>) {
  try {
    const token = yield call(signUp, payload)
    yield put(actions.loadUser())
    localStorage.setItem('accessToken', token.accessToken)
    yield put(actions.getUser())
  } catch (error) {
    yield call(handleError, error)
  }
}

function* publishQuiz({ payload }: ReturnType<typeof actions.publishQuiz>) {
  try {
    const uuid = yield uuidv4()
    const quiz = { uuid, ...payload }
    yield call(saveQuiz, quiz)
    customHistory.push('/')
  } catch (error) {
    yield call(handleError, error)
  }
}

function* addNotification({ payload }: ReturnType<typeof actions.getNotification>) {
  const uuid = uuidv4()
  yield put(actions.addNotification({ ...payload, uuid }))
  yield delay(5000)
  const notification = yield select((state) => state.notifications.some((item) => item.uuid === uuid))
  if (notification) {
    yield put(actions.removeNotification(uuid))
  }
}

function* Saga() {
  yield all([
    takeLatest(ActionTypes.signInRequest, signInUser),
    takeLatest(ActionTypes.getUser, getUser),
    takeLatest(ActionTypes.signOutUser, signOutUser),
    takeLatest(ActionTypes.signUpRequest, signUpUser),
    takeLatest(ActionTypes.publishQuiz, publishQuiz),
    takeEvery(ActionTypes.getNotification, addNotification)
  ])
}

export default Saga
