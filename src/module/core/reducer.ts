import produce from 'immer'
import { ActionType } from 'typesafe-actions'
import { State } from './types'
import { actions, ActionTypes } from './actions'

export const initialState: State = {
  notifications: []
}

export default function coreReducer(state = initialState, action: ActionType<typeof actions>): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addNotification: {
        draft.notifications.push(action.payload)
        return draft
      }

      case ActionTypes.removeNotification: {
        draft.notifications = draft.notifications.filter((item) => item.uuid !== action.payload)
        return draft
      }

      default:
        return state
    }
  })
}
