import produce from 'immer'
import { State } from './types'
import { ActionTypes } from './actions'
import { v4 as uuidv4 } from 'uuid'

export const initialState: State = {
  user: { id: 1, username: 'Masha' },
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

      default:
        return state
    }
  })
}
