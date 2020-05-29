export type State = {
  quizzes: Quiz[]
  isLoading: boolean
}

export type Quiz = {
  uuid?: string
  title: string
  description: string
  questions?: QuizQuestion[]
  isActive: boolean
}

export type QuizQuestion = {
  uuid?: string
  title: string
  image?: string
  options: QuizAnswer[]
}

export type QuizAnswer = {
  uuid?: string
  title: string
  isCorrect: boolean
}
