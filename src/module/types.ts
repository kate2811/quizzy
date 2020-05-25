export type State = {
  user: null | UserData
  isLoading: boolean
  quizzes: Quiz[]
}

export type UserData = {
  uuid: string
  email: string
  firstName: string
  lastName: string
  createDate: string
  updateDate: string
}

export type UserSignInData = {
  email: string
  password: string
  isRemember: boolean
}

export type UserSingUpData = {
  email: string
  firstName: string
  lastName: string
  password: string
}

export type Quiz = {
  userUuid?: string
  uuid: string
  title: string
  questions?: QuizQuestion[]
}

export type QuizQuestion = {
  quizUuid?: string
  uuid: string
  type?: 'checkbox' | 'radio' | 'input'
  title: string
  image?: string
  options: { uuid: string; value: string; isCorrect: boolean }[]
}
