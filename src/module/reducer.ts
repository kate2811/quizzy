import produce from 'immer'
import { State } from './types'
import { ActionTypes } from './actions'
import { v4 as uuidv4 } from 'uuid'

export const initialState: State = {
  user: null,
  quizzes: [
    {
      uuid: 'be471009-0f53-49da-8fb5-afff413a6df7',
      title: 'Gruffalo',
      questions: [
        {
          uuid: uuidv4(),
          title: 'What is Gruffalo favourite food?',
          options: [
            {
              uuid: uuidv4(),
              value: 'A crambled snake',
              isCorrect: true
            },
            {
              uuid: uuidv4(),
              value: 'An owl icecream',
              isCorrect: true
            },
            {
              uuid: uuidv4(),
              isCorrect: false,
              value: 'A burger'
            }
          ]
        },
        {
          uuid: uuidv4(),
          title: 'Who meets Gruffalo?',
          options: [
            {
              uuid: uuidv4(),
              value: 'A mouse',
              isCorrect: true
            },
            {
              uuid: uuidv4(),
              isCorrect: false,
              value: 'A dog'
            },
            {
              uuid: uuidv4(),
              isCorrect: false,
              value: 'A cat'
            }
          ]
        },
        {
          uuid: uuidv4(),
          title: 'Who is the most dangerous animal in the forest?',
          options: [
            {
              uuid: uuidv4(),
              value: 'A mouse',
              isCorrect: true
            },
            {
              uuid: uuidv4(),
              isCorrect: false,
              value: 'A Gruffalo'
            },
            {
              uuid: uuidv4(),
              isCorrect: false,
              value: 'A snake'
            }
          ]
        }
      ]
    }
  ],
  notifications: [
    {
      type: 'success',
      text:
        'We created a shim to help folks upgrade easily their existing projects from Font Awesome 4 to ' +
        '5 and avoid those embarrassing missing icon moments. Read more about upgrading from version',
      uuid: '1kdemrfh4u3'
    },
    { type: 'warning', text: 'Warning notification. Something happened wrong', uuid: '1kfghrfh4u3' }
  ],
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

      case ActionTypes.saveQuiz: {
        draft.quizzes = [...draft.quizzes, action.payload]
        return draft
      }

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
