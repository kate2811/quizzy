import produce from 'immer'
import { State } from './types'
import { ActionType } from 'typesafe-actions'
import { actions, ActionTypes } from './actions'

export const initialState: State = {
  quizzes: [],
  isLoading: false
}

export default function quizReducer(state = initialState, action: ActionType<typeof actions>): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addQuiz: {
        draft.quizzes.push(action.payload)
        return draft
      }

      case ActionTypes.getQuizzes: {
        draft.quizzes = action.payload
        return draft
      }

      case ActionTypes.clearQuizzes: {
        draft.quizzes = []
        return draft
      }

      case ActionTypes.loadQuizzes: {
        draft.isLoading = true
        return draft
      }

      case ActionTypes.loadQuizzesSuccess: {
        draft.isLoading = false
        return draft
      }

      default:
        return state
    }
  })
}
