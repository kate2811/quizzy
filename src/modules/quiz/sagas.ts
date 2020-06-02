import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import {
  getQuizzes,
  addQuiz,
  getQuizByUuid,
  deleteQuiz as deleteQuizFromApi,
  editQuiz as editQuizInApi
} from '../../utils/api'
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
    const response = yield call(getQuizByUuid, payload)
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

function* deleteQuiz({ payload }: ReturnType<typeof actions.deleteQuiz>) {
  try {
    customHistory.push('/')
    yield put(actions.deleteQuizLocally(payload))
    yield call(deleteQuizFromApi, payload)
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* editQuiz({ payload }: ReturnType<typeof actions.editQuiz>) {
  try {
    const response = yield call(editQuizInApi, payload)
    yield put(actions.editQuizLocally(response))
    customHistory.push('/')
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* quizSaga() {
  yield all([
    takeLatest(ActionTypes.publishQuiz, publishQuiz),
    takeLatest(ActionTypes.loadQuizzes, loadQuizzes),
    takeLatest(ActionTypes.loadQuizByUuid, loadQuizByUuid),
    takeLatest(ActionTypes.deleteQuiz, deleteQuiz),
    takeLatest(ActionTypes.editQuiz, editQuiz)
  ])
}

export default quizSaga
