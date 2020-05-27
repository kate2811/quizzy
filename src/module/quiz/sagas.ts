import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import { saveQuiz } from '../../utils/api'
import { customHistory } from '../../history'
import { v4 as uuidv4 } from 'uuid'
import { actions as coreActions } from '../core/actions'

function* publishQuiz({ payload }: ReturnType<typeof actions.publishQuiz>) {
  try {
    const uuid = uuidv4()
    const quiz = { uuid, ...payload }
    yield call(saveQuiz, quiz)
    customHistory.push('/')
  } catch (error) {
    yield put(coreActions.handleError(error.response))
  }
}

function* quizSaga() {
  yield all([takeLatest(ActionTypes.publishQuiz, publishQuiz)])
}

export default quizSaga
