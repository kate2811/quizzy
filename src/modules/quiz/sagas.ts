import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import { getQuizzes, getQuiz, addQuiz, updateQuizData, removeQuiz, addNewQuizQuestion } from '../../utils/api'
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

function* updateQuiz({ payload }: ReturnType<typeof actions.updateQuiz>) {
  try {
    const response = yield call(updateQuizData, payload)
    yield put(actions.updateQuizSuccess(response))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* deleteQuiz({ payload }: ReturnType<typeof actions.deleteQuiz>) {
  try {
    yield call(removeQuiz, payload)
    customHistory.push('/')
    yield put(actions.deleteQuizSuccess(payload))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* addQuizQuestion({ payload }: ReturnType<typeof actions.addQuizQuestion>) {
  try {
    const response = yield call(addNewQuizQuestion, payload)
    yield put(actions.addQuizQuestionSuccess({ quizUuid: payload.quizUuid, question: response }))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* quizSaga() {
  yield all([
    takeLatest(ActionTypes.publishQuiz, publishQuiz),
    takeLatest(ActionTypes.loadQuizzes, loadQuizzes),
    takeLatest(ActionTypes.loadQuizByUuid, loadQuizByUuid),
    takeLatest(ActionTypes.updateQuiz, updateQuiz),
    takeLatest(ActionTypes.deleteQuiz, deleteQuiz),
    takeLatest(ActionTypes.addQuizQuestion, addQuizQuestion)
  ])
}

export default quizSaga
