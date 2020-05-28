import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import { getQuizzes, saveQuiz } from '../../utils/api'
import { customHistory } from '../../history'
import { actions as coreActions } from '../core/actions'

function* publishQuiz({ payload }: ReturnType<typeof actions.publishQuiz>) {
  try {
    const response = yield call(saveQuiz, payload)
    yield put(actions.addQuiz(response))
    customHistory.push('/')
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* loadQuizzes() {
  try {
    const response = yield call(getQuizzes)
    yield put(actions.getQuizzes(response))
    yield put(actions.loadQuizzesSuccess())
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* quizSaga() {
  yield all([takeLatest(ActionTypes.publishQuiz, publishQuiz), takeLatest(ActionTypes.loadQuizzes, loadQuizzes)])
}

export default quizSaga
