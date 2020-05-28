import { Quiz } from './types'
import createAction from '../../utils/createAction'

export enum ActionTypes {
  publishQuiz = 'Quiz is published',
  addQuiz = 'Quiz was added',
  loadQuizzes = 'Load quizzes',
  loadQuizzesSuccess = 'Load quizzes success',
  clearQuizzes = 'Clear users quizzes',
  getQuizzes = 'Get quizzes'
}

export const actions = {
  publishQuiz: createAction<ActionTypes.publishQuiz, Omit<Quiz, 'uuid'>>(ActionTypes.publishQuiz),
  addQuiz: createAction<ActionTypes.addQuiz, Quiz>(ActionTypes.addQuiz),
  loadQuizzes: createAction<ActionTypes.loadQuizzes, void>(ActionTypes.loadQuizzes),
  loadQuizzesSuccess: createAction<ActionTypes.loadQuizzesSuccess, void>(ActionTypes.loadQuizzesSuccess),
  clearQuizzes: createAction<ActionTypes.clearQuizzes, void>(ActionTypes.clearQuizzes),
  getQuizzes: createAction<ActionTypes.getQuizzes, Quiz[]>(ActionTypes.getQuizzes)
}
