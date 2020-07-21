import { UpdatedQuizQuestion, Quiz, UpdateQuizOption } from './types'
import createAction from '../../utils/createAction'

export enum ActionTypes {
  loadQuizzes = 'Load quizzes',
  loadQuizzesSuccess = 'Load quizzes success',
  addQuiz = 'Quiz is added',
  addQuizSuccess = 'Quiz is added success',
  clearQuizzes = 'Clear quizzes',
  loadQuizByUuid = 'Load a quiz',
  loadQuizByUuidSuccess = 'Load a quiz success',
  setFilter = 'Set filter',
  updateQuiz = 'Update quiz',
  updateQuizSuccess = 'Update quiz success',
  deleteQuiz = 'Remove quiz to archive',
  deleteQuizSuccess = 'Remove quiz to archive success',
  addQuizEmptyQuestion = 'Add quiz empty question',
  deleteQuizEmptyQuestion = 'Delete quiz empty question',
  addQuizQuestion = 'Add new question',
  addQuizQuestionSuccess = 'Add new question success',
  updateQuizQuestion = 'Update quiz question',
  updateQuizQuestionSuccess = 'Update quiz question success',
  deleteQuizQuestion = 'Delete quiz question',
  deleteQuizQuestionSuccess = 'Delete quiz question success',
  addQuizEmptyOption = 'Add quiz empty option',
  deleteQuizEmptyOption = 'Delete quiz empty option',
  addQuizOption = 'Add quiz option',
  addQuizOptionSuccess = 'Add quiz option success',
  updateQuizOption = 'Edit quiz option',
  updateQuizOptionSuccess = 'Edit quiz option success',
  deleteQuizOption = 'Delete quiz option',
  deleteQuizOptionSuccess = 'Delete quiz option success'
}

export const actions = {
  loadQuizzes: createAction<ActionTypes.loadQuizzes, void>(ActionTypes.loadQuizzes),
  loadQuizzesSuccess: createAction<ActionTypes.loadQuizzesSuccess, Quiz[]>(ActionTypes.loadQuizzesSuccess),
  addQuiz: createAction<ActionTypes.addQuiz, Omit<Quiz, 'uuid'>>(ActionTypes.addQuiz),
  addQuizSuccess: createAction<ActionTypes.addQuizSuccess, Quiz>(ActionTypes.addQuizSuccess),
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
  addQuizEmptyQuestion: createAction<ActionTypes.addQuizEmptyQuestion, string>(ActionTypes.addQuizEmptyQuestion),
  deleteQuizEmptyQuestion: createAction<ActionTypes.deleteQuizEmptyQuestion, string>(
    ActionTypes.deleteQuizEmptyQuestion
  ),
  addQuizQuestion: createAction<ActionTypes.addQuizQuestion, UpdatedQuizQuestion>(ActionTypes.addQuizQuestion),
  addQuizQuestionSuccess: createAction<ActionTypes.addQuizQuestionSuccess, UpdatedQuizQuestion>(
    ActionTypes.addQuizQuestionSuccess
  ),
  updateQuizQuestion: createAction<ActionTypes.updateQuizQuestion, UpdatedQuizQuestion>(ActionTypes.updateQuizQuestion),
  updateQuizQuestionSuccess: createAction<ActionTypes.updateQuizQuestionSuccess, UpdatedQuizQuestion>(
    ActionTypes.updateQuizQuestionSuccess
  ),
  deleteQuizQuestion: createAction<ActionTypes.deleteQuizQuestion, { quizUuid: string; questionUuid: string }>(
    ActionTypes.deleteQuizQuestion
  ),
  deleteQuizQuestionSuccess: createAction<
    ActionTypes.deleteQuizQuestionSuccess,
    { quizUuid: string; questionUuid: string }
  >(ActionTypes.deleteQuizQuestionSuccess),
  addQuizEmptyOption: createAction<ActionTypes.addQuizEmptyOption, { quizUuid: string; questionUuid: string }>(
    ActionTypes.addQuizEmptyOption
  ),
  deleteQuizEmptyOption: createAction<ActionTypes.deleteQuizEmptyOption, { quizUuid: string; questionUuid: string }>(
    ActionTypes.deleteQuizEmptyOption
  ),
  addQuizOption: createAction<ActionTypes.addQuizOption, UpdateQuizOption>(ActionTypes.addQuizOption),
  addQuizOptionSuccess: createAction<ActionTypes.addQuizOptionSuccess, UpdateQuizOption>(
    ActionTypes.addQuizOptionSuccess
  ),
  updateQuizOption: createAction<ActionTypes.updateQuizOption, UpdateQuizOption>(ActionTypes.updateQuizOption),
  updateQuizOptionSuccess: createAction<ActionTypes.updateQuizOptionSuccess, UpdateQuizOption>(
    ActionTypes.updateQuizOptionSuccess
  ),
  deleteQuizOption: createAction<
    ActionTypes.deleteQuizOption,
    { quizUuid: string; questionUuid: string; optionUuid: string }
  >(ActionTypes.deleteQuizOption),
  deleteQuizOptionSuccess: createAction<
    ActionTypes.deleteQuizOptionSuccess,
    { quizUuid: string; questionUuid: string; optionUuid: string }
  >(ActionTypes.deleteQuizOptionSuccess)
}
