import { Quiz } from './types'
import createAction from '../../utils/createAction'

export enum ActionTypes {
  loadQuizzes = 'Load quizzes',
  loadQuizzesSuccess = 'Load quizzes success',
  publishQuiz = 'Quiz is published',
  addQuiz = 'Quiz is added to store',
  clearQuizzes = 'Clear quizzes',
  loadQuizByUuid = 'Load a quiz',
  loadQuizByUuidSuccess = 'Load a quiz success'
}

export const actions = {
  loadQuizzes: createAction<ActionTypes.loadQuizzes, void>(ActionTypes.loadQuizzes),
  loadQuizzesSuccess: createAction<ActionTypes.loadQuizzesSuccess, Quiz[]>(ActionTypes.loadQuizzesSuccess),
  publishQuiz: createAction<ActionTypes.publishQuiz, Omit<Quiz, 'uuid'>>(ActionTypes.publishQuiz),
  addQuiz: createAction<ActionTypes.addQuiz, Quiz>(ActionTypes.addQuiz),
  clearQuizzes: createAction<ActionTypes.clearQuizzes, void>(ActionTypes.clearQuizzes),
  loadQuizByUuid: createAction<ActionTypes.loadQuizByUuid, string>(ActionTypes.loadQuizByUuid),
  loadQuizByUuidSuccess: createAction<ActionTypes.loadQuizByUuidSuccess, Quiz>(ActionTypes.loadQuizByUuidSuccess)
}
