import produce from 'immer'
import { State } from './types'
import { ActionTypes } from './actions'

export const initialState: State = {
  user: { id: 1, username: 'Masha'},
  quizzes: [],
  //quizzes: [{ title: 'elementary school quiz'}, { title: 'high school quiz'} ],
  isLoading: false
}

export default function reducer(state = initialState, action: any): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.loadUser: {
        draft.isLoading = true
        return draft
      }

      case ActionTypes.loadUserSuccess: {
        draft.isLoading = false
        draft.user = action.payload
        return draft
      }

      case ActionTypes.signInFailure: {
        draft.user = null
        draft.isLoading = false
        return draft
      }

      case ActionTypes.signOutUser: {
        draft.user = null
        return draft
      }

      default:
        return state
    }
  })
}
