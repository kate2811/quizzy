import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import {
  getQuizzes,
  getQuiz,
  addQuiz,
  updateQuizData,
  removeQuiz,
  addNewQuizQuestion,
  editQuizQuestion,
  removeQuizQuestion,
  addNewQuizOption,
  editQuizOption,
  removeQuizOption
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
    const response = yield call(getQuiz, payload)
    yield put(actions.loadQuizByUuidSuccess(response))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* addNewQuiz({ payload }: ReturnType<typeof actions.addQuiz>) {
  try {
    const response = yield call(addQuiz, payload)
    yield put(actions.addQuizSuccess(response))
    yield customHistory.push('/edit/' + response.uuid)
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
    yield put(coreActions.getNotification({ text: 'Quiz has been archived', type: 'success' }))
    yield put(actions.deleteQuizSuccess(payload))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* addQuizQuestion({ payload }: ReturnType<typeof actions.addQuizQuestion>) {
  try {
    const response = yield call(addNewQuizQuestion, payload)
    yield put(actions.addQuizQuestionSuccess({ quizUuid: response.quiz, question: response }))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* updateQuizQuestion({ payload }: ReturnType<typeof actions.updateQuizQuestion>) {
  try {
    if (payload.question.title) {
      const response = yield call(editQuizQuestion, payload)
      yield put(actions.updateQuizQuestionSuccess({ quizUuid: payload.quizUuid, question: response }))
    } else {
      yield put(coreActions.getNotification({ text: 'Question must not be empty', type: 'warning' }))
      yield put(actions.updateQuizQuestionSuccess({ quizUuid: payload.quizUuid, question: payload.question }))
    }
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* deleteQuizQuestion({ payload }: ReturnType<typeof actions.deleteQuizQuestion>) {
  try {
    yield call(removeQuizQuestion, payload)
    yield put(actions.deleteQuizQuestionSuccess({ quizUuid: payload.quizUuid, questionUuid: payload.questionUuid }))
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* addQuizOption({ payload }: ReturnType<typeof actions.addQuizOption>) {
  try {
    const response = yield call(addNewQuizOption, payload)
    yield put(
      actions.addQuizOptionSuccess({ quizUuid: payload.quizUuid, questionUuid: payload.questionUuid, option: response })
    )
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* updateQuizOption({ payload }: ReturnType<typeof actions.updateQuizOption>) {
  try {
    if (payload.option.title) {
      const response = yield call(editQuizOption, payload)
      yield put(
        actions.updateQuizOptionSuccess({
          quizUuid: payload.quizUuid,
          questionUuid: payload.questionUuid,
          option: response
        })
      )
    } else {
      yield put(coreActions.getNotification({ text: 'Option must not be empty', type: 'warning' }))
      yield put(
        actions.updateQuizOptionSuccess({
          quizUuid: payload.quizUuid,
          questionUuid: payload.questionUuid,
          option: payload.option
        })
      )
    }
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* deleteQuizOption({ payload }: ReturnType<typeof actions.deleteQuizOption>) {
  try {
    yield call(removeQuizOption, payload)
    yield put(
      actions.deleteQuizOptionSuccess({
        questionUuid: payload.questionUuid,
        quizUuid: payload.quizUuid,
        optionUuid: payload.optionUuid
      })
    )
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* quizSaga() {
  yield all([
    takeLatest(ActionTypes.addQuiz, addNewQuiz),
    takeLatest(ActionTypes.loadQuizzes, loadQuizzes),
    takeLatest(ActionTypes.loadQuizByUuid, loadQuizByUuid),
    takeLatest(ActionTypes.updateQuiz, updateQuiz),
    takeLatest(ActionTypes.deleteQuiz, deleteQuiz),
    takeLatest(ActionTypes.addQuizQuestion, addQuizQuestion),
    takeLatest(ActionTypes.updateQuizQuestion, updateQuizQuestion),
    takeLatest(ActionTypes.deleteQuizQuestion, deleteQuizQuestion),
    takeLatest(ActionTypes.addQuizOption, addQuizOption),
    takeLatest(ActionTypes.updateQuizOption, updateQuizOption),
    takeLatest(ActionTypes.deleteQuizOption, deleteQuizOption)
  ])
}

export default quizSaga
