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

      default:
        return state
    }
  })
}
