import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import { getUserData, signIn, signUp } from '../../utils/api'
import { customHistory } from '../../history'
import { actions as coreActions } from '../core/actions'
import { actions as quizActions } from '../quiz/actions'

function* getUser() {
  try {
    const response = yield call(getUserData)
    yield put(actions.loadUserSuccess(response))
    yield put(quizActions.loadQuizzes())
    customHistory.push('/')
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* signInUser({ payload }: ReturnType<typeof actions.signInRequest>) {
  try {
    const token = yield call(signIn, { email: payload.email, password: payload.password })
    yield put(actions.loadUser())
    payload.isRemember
      ? localStorage.setItem('accessToken', token.accessToken)
      : sessionStorage.setItem('accessToken', token.accessToken)
    yield put(actions.getUser())
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* signUpUser({ payload }: ReturnType<typeof actions.signUpRequest>) {
  try {
    const token = yield call(signUp, payload)
    yield put(actions.loadUser())
    localStorage.setItem('accessToken', token.accessToken)
    yield put(actions.getUser())
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* signOutUser() {
  yield put(actions.clearUser())
  localStorage.removeItem('accessToken')
  sessionStorage.removeItem('accessToken')
  yield put(quizActions.clearQuizzes())
}

function* authSaga() {
  yield all([
    takeLatest(ActionTypes.signInRequest, signInUser),
    takeLatest(ActionTypes.getUser, getUser),
    takeLatest(ActionTypes.signOutUser, signOutUser),
    takeLatest(ActionTypes.signUpRequest, signUpUser)
  ])
}

export default authSaga
