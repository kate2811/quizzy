import { Quiz } from './types'
import createAction from '../../utils/createAction'

export enum ActionTypes {
  loadQuizzes = 'Load quizzes',
  loadQuizzesSuccess = 'Load quizzes success',
  publishQuiz = 'Quiz is published',
  addQuiz = 'Quiz is added to store',
  clearQuizzes = 'Clear quizzes',
  loadQuizByUuid = 'Load quiz by uuid',
  loadQuizByUuidSuccess = 'Load quiz by uuid success',
  editQuiz = 'Quiz is edited',
  editQuizLocally = 'Quiz is edited locally',
  deleteQuiz = 'Quiz is deleted from server',
  deleteQuizLocally = 'Quiz is deleted locally'
}

export const actions = {
  loadQuizzes: createAction<ActionTypes.loadQuizzes, void>(ActionTypes.loadQuizzes),
  loadQuizzesSuccess: createAction<ActionTypes.loadQuizzesSuccess, Quiz[]>(ActionTypes.loadQuizzesSuccess),
  publishQuiz: createAction<ActionTypes.publishQuiz, Omit<Quiz, 'uuid'>>(ActionTypes.publishQuiz),
  addQuiz: createAction<ActionTypes.addQuiz, Quiz>(ActionTypes.addQuiz),
  clearQuizzes: createAction<ActionTypes.clearQuizzes, void>(ActionTypes.clearQuizzes),
  loadQuizByUuid: createAction<ActionTypes.loadQuizByUuid, string>(ActionTypes.loadQuizByUuid),
  loadQuizByUuidSuccess: createAction<ActionTypes.loadQuizByUuidSuccess, Quiz>(ActionTypes.loadQuizByUuidSuccess),
  editQuiz: createAction<ActionTypes.editQuiz, Quiz>(ActionTypes.editQuiz),
  editQuizLocally: createAction<ActionTypes.editQuizLocally, Quiz>(ActionTypes.editQuizLocally),
  deleteQuiz: createAction<ActionTypes.deleteQuiz, string>(ActionTypes.deleteQuiz),
  deleteQuizLocally: createAction<ActionTypes.deleteQuizLocally, string>(ActionTypes.deleteQuizLocally)
}
