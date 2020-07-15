export type State = {
  quizzes: Quiz[]
  isLoading: boolean
  filter: string | null
}

export type Quiz = {
  uuid?: string
  title: string
  description: string
  questions: QuizQuestion[]
}

export type QuizQuestion = {
  uuid?: string
  title: string
  options: QuizAnswer[]
}

export type QuizAnswer = {
  uuid?: string
  title: string
  isCorrect: boolean
}

export type UpdatedQuizQuestion = {
  quizUuid: string
  question: QuizQuestion
}

export type UpdateQuizOption = {
  quizUuid: string
  questionUuid: string
  option: QuizAnswer
}
