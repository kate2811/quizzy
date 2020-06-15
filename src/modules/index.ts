import { combineReducers } from 'redux'
import * as reactRedux from 'react-redux'
import { all, select } from 'redux-saga/effects'
import coreReducer from './core/reducer'
import authReducer from './auth/reducer'
import quizReducer from './quiz/reducer'
import coreSaga from './core/sagas'
import authSaga from './auth/sagas'
import quizSaga from './quiz/sagas'

export const reducer = combineReducers({
  core: coreReducer,
  auth: authReducer,
  quiz: quizReducer
})

export type State = ReturnType<typeof reducer>

export const useSelector: <TSelected>(
  selector: (state: State) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected = reactRedux.useSelector

export function* rootSaga() {
  yield all([coreSaga(), authSaga(), quizSaga()])
}

export function selectState<T>(selector: (s: State) => T): T {
  return (select(selector) as unknown) as T
}
