import produce from 'immer'
import { State } from './types'
import { ActionType } from 'typesafe-actions'
import { actions, ActionTypes } from './actions'

export const initialState: State = {
  quizzes: [],
  isLoading: false,
  filter: null
}

export default function quizReducer(state = initialState, action: ActionType<typeof actions>): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.loadQuizzes: {
        draft.isLoading = true
        return draft
      }

      case ActionTypes.loadQuizzesSuccess: {
        draft.quizzes = action.payload
        draft.isLoading = false
        return draft
      }

      case ActionTypes.loadQuizByUuid: {
        draft.isLoading = true
        return draft
      }

      case ActionTypes.loadQuizByUuidSuccess: {
        draft.quizzes.push(action.payload)
        draft.isLoading = false
        return draft
      }

      case ActionTypes.addQuizSuccess: {
        draft.quizzes.push(action.payload)
        return draft
      }

      case ActionTypes.clearQuizzes: {
        draft.quizzes = []
        return draft
      }

      case ActionTypes.setFilter: {
        draft.filter = action.payload
        return draft
      }

      case ActionTypes.updateQuizSuccess: {
        draft.quizzes = draft.quizzes.map((item) =>
          item.uuid === action.payload.uuid
            ? Object.assign({}, item, { title: action.payload.title, description: action.payload.description })
            : item
        )
        return draft
      }

      case ActionTypes.deleteQuizSuccess: {
        draft.quizzes = draft.quizzes.filter((item) => item.uuid !== action.payload)
        return draft
      }

      case ActionTypes.addQuizEmptyQuestion: {
        const emptyQuestion = { title: '', options: [] }
        draft.quizzes = draft.quizzes.map((item) =>
          item.uuid === action.payload
            ? Object.assign({}, item, { questions: [...item.questions, emptyQuestion] })
            : item
        )
        return draft
      }

      case ActionTypes.deleteQuizEmptyQuestion: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload)
        draft.quizzes[quiz].questions = draft.quizzes[quiz].questions.filter((item) => item.uuid)
        return draft
      }

      case ActionTypes.addQuizQuestionSuccess: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        const editedQuestion = draft.quizzes[quiz].questions.findIndex((item) => !item.uuid)
        draft.quizzes[quiz].questions[editedQuestion] = action.payload.question
        return draft
      }

      case ActionTypes.updateQuizQuestionSuccess: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        const editedQuestion = draft.quizzes[quiz].questions.findIndex(
          (item) => item.uuid === action.payload.question.uuid
        )
        draft.quizzes[quiz].questions[editedQuestion] = action.payload.question
        return draft
      }

      case ActionTypes.deleteQuizQuestionSuccess: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        draft.quizzes[quiz].questions = draft.quizzes[quiz].questions.filter(
          (item) => item.uuid !== action.payload.questionUuid
        )
        return draft
      }

      case ActionTypes.addQuizEmptyOption: {
        const emptyOption = { title: '', isCorrect: true }
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        draft.quizzes[quiz].questions.map((item) =>
          item.uuid === action.payload.questionUuid ? item.options.push(emptyOption) : item
        )
        return draft
      }

      case ActionTypes.deleteQuizEmptyOption: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        const question = draft.quizzes[quiz].questions.findIndex((item) => item.uuid === action.payload.questionUuid)
        draft.quizzes[quiz].questions[question].options = draft.quizzes[quiz].questions[question].options.filter(
          (item) => item.uuid
        )
        return draft
      }

      case ActionTypes.addQuizOptionSuccess: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        const question = draft.quizzes[quiz].questions.findIndex((item) => item.uuid === action.payload.questionUuid)
        const editedOption = draft.quizzes[quiz].questions[question].options.findIndex((item) => !item.uuid)
        draft.quizzes[quiz].questions[question].options[editedOption] = action.payload.option

        return draft
      }

      case ActionTypes.updateQuizOptionSuccess: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        const question = draft.quizzes[quiz].questions.findIndex((item) => item.uuid === action.payload.questionUuid)
        const editedOption = draft.quizzes[quiz].questions[question].options.findIndex(
          (item) => item.uuid === action.payload.option.uuid
        )
        draft.quizzes[quiz].questions[question].options[editedOption] = action.payload.option
        return draft
      }

      case ActionTypes.deleteQuizOptionSuccess: {
        const quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        const question = draft.quizzes[quiz].questions.findIndex((item) => item.uuid === action.payload.questionUuid)
        draft.quizzes[quiz].questions[question].options = draft.quizzes[quiz].questions[question].options.filter(
          (item) => item.uuid !== action.payload.optionUuid
        )
        return draft
      }

      default:
        return state
    }
  })
}
