export type State = {
  user: null | UserData
  isLoading: boolean
  quizzes: Quiz[]
}

export type UserData = {
  id: number
  username: string
}

export type UserSignInData = {
  email: string
  password: string
  isRemember: boolean
}

export type UserSingUpData = {
  email: string
  username: string
  password: string
}

export type Quiz = {
  userUuid: string
  uuid: string
  title: string
  questions?: QuizQuestion[]
}

export type QuizQuestion = {
  quizUuid: string
  uuid: string
  type: 'checkbox' | 'radio' | 'input'
  title: string
  image?: string
  options?: string[]
  answers: string[]
}
