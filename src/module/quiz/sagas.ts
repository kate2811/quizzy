import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import { getQuizzes, getQuiz, addQuiz } from '../../utils/api'
import { customHistory } from '../../history'
import { actions as coreActions } from '../core/actions'

function* loadQuizzes() {
  try {
    const response = yield call(getQuizzes)
    yield put(actions.loadQuizzesSuccess(response))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* loadQuizByUuid({ payload }: ReturnType<typeof actions.loadQuizByUuid>) {
  try {
    const response = yield call(getQuiz, payload)
    yield put(actions.loadQuizByUuidSuccess(response))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* publishQuiz({ payload }: ReturnType<typeof actions.publishQuiz>) {
  try {
    const response = yield call(addQuiz, payload)
    yield put(actions.addQuiz(response))
    customHistory.push('/')
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* quizSaga() {
  yield all([
    takeLatest(ActionTypes.publishQuiz, publishQuiz),
    takeLatest(ActionTypes.loadQuizzes, loadQuizzes),
    takeLatest(ActionTypes.loadQuizByUuid, loadQuizByUuid)
  ])
}

export default quizSaga
