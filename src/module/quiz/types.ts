export type State = {
  quizzes: Quiz[]
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
