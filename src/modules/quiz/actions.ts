import { AddedQuizQuestion, Quiz, QuizAnswer, QuizQuestion } from './types'
import createAction from '../../utils/createAction'

export enum ActionTypes {
  loadQuizzes = 'Load quizzes',
  loadQuizzesSuccess = 'Load quizzes success',
  publishQuiz = 'Quiz is published',
  addQuiz = 'Quiz is added to store',
  clearQuizzes = 'Clear quizzes',
  loadQuizByUuid = 'Load a quiz',
  loadQuizByUuidSuccess = 'Load a quiz success',
  setFilter = 'Set filter',
  updateQuiz = 'Update quiz',
  updateQuizSuccess = 'Update quiz success',
  deleteQuiz = 'Remove quiz to archive',
  deleteQuizSuccess = 'Remove quiz to archive success',
  addQuizQuestion = 'Add new question',
  addQuizQuestionSuccess = 'Add new question success',
  updateQuizQuestion = 'Update quiz question',
  deleteQuizQuestion = 'Delete quiz question',
  addQuizOption = 'Add quiz option',
  editQuizOption = 'Edit quiz option',
  deleteQuizOption = 'Delete quiz option'
}

export const actions = {
  loadQuizzes: createAction<ActionTypes.loadQuizzes, void>(ActionTypes.loadQuizzes),
  loadQuizzesSuccess: createAction<ActionTypes.loadQuizzesSuccess, Quiz[]>(ActionTypes.loadQuizzesSuccess),
  publishQuiz: createAction<ActionTypes.publishQuiz, Omit<Quiz, 'uuid'>>(ActionTypes.publishQuiz),
  addQuiz: createAction<ActionTypes.addQuiz, Quiz>(ActionTypes.addQuiz),
  clearQuizzes: createAction<ActionTypes.clearQuizzes, void>(ActionTypes.clearQuizzes),
  loadQuizByUuid: createAction<ActionTypes.loadQuizByUuid, string>(ActionTypes.loadQuizByUuid),
  loadQuizByUuidSuccess: createAction<ActionTypes.loadQuizByUuidSuccess, Quiz>(ActionTypes.loadQuizByUuidSuccess),
  setFilter: createAction<ActionTypes.setFilter, string>(ActionTypes.setFilter),
  updateQuiz: createAction<ActionTypes.updateQuiz, Omit<Quiz, 'questions'>>(ActionTypes.updateQuiz),
  updateQuizSuccess: createAction<ActionTypes.updateQuizSuccess, Omit<Quiz, 'questions'>>(
    ActionTypes.updateQuizSuccess
  ),
  deleteQuiz: createAction<ActionTypes.deleteQuiz, string>(ActionTypes.deleteQuiz),
  deleteQuizSuccess: createAction<ActionTypes.deleteQuizSuccess, string>(ActionTypes.deleteQuizSuccess),
  addQuizQuestion: createAction<ActionTypes.addQuizQuestion, AddedQuizQuestion>(ActionTypes.addQuizQuestion),
  addQuizQuestionSuccess: createAction<ActionTypes.addQuizQuestionSuccess, AddedQuizQuestion>(
    ActionTypes.addQuizQuestionSuccess
  ),
  updateQuizQuestion: createAction<ActionTypes.updateQuizQuestion, Pick<Quiz, 'uuid' & 'question'>>(
    ActionTypes.updateQuizQuestion
  ),
  deleteQuizQuestion: createAction<ActionTypes.deleteQuizQuestion, Pick<Quiz, 'uuid'> & Pick<QuizQuestion, 'uuid'>>(
    ActionTypes.deleteQuizQuestion
  ),
  addQuizOption: createAction<ActionTypes.addQuizOption, QuizAnswer>(ActionTypes.addQuizOption),
  editQuizOption: createAction<ActionTypes.editQuizOption, QuizAnswer>(ActionTypes.editQuizOption),
  deleteQuizOption: createAction<ActionTypes.deleteQuizOption, QuizAnswer>(ActionTypes.deleteQuizOption)
}
