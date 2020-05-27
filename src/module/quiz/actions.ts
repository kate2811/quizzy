import { Quiz } from './types'
import createAction from '../../utils/createAction'

export enum ActionTypes {
  publishQuiz = 'Quiz is published',
  saveQuiz = 'Quiz is saved'
}

export const actions = {
  publishQuiz: createAction<ActionTypes.publishQuiz, Omit<Quiz, 'uuid'>>(ActionTypes.publishQuiz),
  saveQuiz: createAction<ActionTypes.saveQuiz, Quiz>(ActionTypes.saveQuiz)
}
