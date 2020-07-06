import produce from 'immer'
import { ActionType } from 'typesafe-actions'
import { State } from './types'
import { actions, ActionTypes } from './actions'

export const initialState: State = {
  //user: { lastName: 'Pavlov', firstName: 'Alex', email: 'jh@kk.ru', uuid: 'mmkrkr3' },
  user: null,
  isLoading: false
}

export default function authReducer(state = initialState, action: ActionType<typeof actions>): State {
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

      case ActionTypes.clearUser: {
        draft.user = null
        return draft
      }

      default:
        return state
    }
  })
}
