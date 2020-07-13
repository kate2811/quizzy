import React from 'react'
import {
  useAddQuizQuestion,
  useEditQuizQuestion,
  useDeleteQuizQuestion,
  useQuizQuestions,
  useAddQuizEmptyQuestion,
  useDeleteQuizEmptyQuestion
} from '../../modules/quiz/hooks'
import QuizFormQuestions from './QuizFormQuestions'

export default function ({ quiz }) {
  const onAddQuestion = useAddQuizQuestion()
  const onAddEmptyQuestion = useAddQuizEmptyQuestion()
  const onDeleteEmptyQuestion = useDeleteQuizEmptyQuestion()
  const onEditQuestion = useEditQuizQuestion()
  const onDeleteQuestion = useDeleteQuizQuestion()
  const questions = useQuizQuestions(quiz.uuid)

  return (
    <QuizFormQuestions
      onAddQuestion={onAddQuestion}
      onAddEmptyQuestion={onAddEmptyQuestion}
      onEditQuestion={onEditQuestion}
      onDeleteQuestion={onDeleteQuestion}
      onDeleteEmptyQuestion={onDeleteEmptyQuestion}
      questions={questions}
      quiz={quiz}
    />
  )
}
