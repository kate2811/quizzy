export type State = {
  quizzes: Quiz[]
  isLoading: boolean
  filter: string | null
}

export type Quiz = {
  uuid?: string
  title: string
  description: string
  questions?: QuizQuestion[]
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
