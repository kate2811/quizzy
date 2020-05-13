import produce from 'immer'
import { State } from './types'
import { ActionTypes } from './actions'

export const initialState: State = {
  user: null
}

export default function reducer(state = initialState, action: any): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.loginUser: {
        draft.user = action.payload
        return draft
      }

      case ActionTypes.authSuccess: {
        draft.user = action.payload
        return draft
      }

      case ActionTypes.authFailure: {
        draft.user = null
        console.log('fail!')
        return draft
      }

      default:
        return state
    }
  })
}
