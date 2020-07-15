import React from 'react'
import {
  useAddQuizQuestion,
  useEditQuizQuestion,
  useDeleteQuizQuestion,
  useQuizQuestions,
  useAddQuizEmptyQuestion,
  useIsEmptyQuestion
} from '../../modules/quiz/hooks'
import QuizFormQuestions from './QuizFormQuestions'

export default function ({ quiz }) {
  const onAddQuestion = useAddQuizQuestion()
  const onAddEmptyQuestion = useAddQuizEmptyQuestion()
  const onEditQuestion = useEditQuizQuestion()
  const onDeleteQuestion = useDeleteQuizQuestion()
  const questions = useQuizQuestions(quiz.uuid)
  const isEmptyQuestion = useIsEmptyQuestion(quiz.uuid)

  return (
    <QuizFormQuestions
      onAddQuestion={onAddQuestion}
      onAddEmptyQuestion={onAddEmptyQuestion}
      onEditQuestion={onEditQuestion}
      onDeleteQuestion={onDeleteQuestion}
      isEmptyQuestion={isEmptyQuestion}
      questions={questions}
      quiz={quiz}
    />
  )
}
