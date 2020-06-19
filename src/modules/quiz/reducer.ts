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
  return <State>produce(state, (draft) => {
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

      case ActionTypes.addQuiz: {
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

      case ActionTypes.addQuizQuestionSuccess: {
        draft.quizzes = draft.quizzes.map((item) =>
          item.uuid === action.payload.quizUuid
            ? Object.assign({}, item, {
                questions: item.questions ? [...item.questions, action.payload.question] : [action.payload.question]
              })
            : item
        )
        return draft
      }

      case ActionTypes.updateQuizQuestionSuccess: {
        let quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        // @ts-ignore
        draft.quizzes[quiz].questions = draft.quizzes[quiz].questions.map((item) =>
          item.uuid === action.payload.question.uuid ? action.payload.question : item
        )
        return draft
      }

      case ActionTypes.deleteQuizQuestionSuccess: {
        let quiz = draft.quizzes.findIndex((item) => item.uuid === action.payload.quizUuid)
        // @ts-ignore
        draft.quizzes[quiz].questions.filter((item) => item.uuid !== action.payload.question.uuid)
        return draft
      }

      default:
        return state
    }
  })
}
