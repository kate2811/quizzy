import React from 'react'
import { useAddQuizQuestion, useQuizByUuid, useEditQuizQuestion, useDeleteQuizQuestion } from '../../modules/quiz/hooks'
import { useParams } from 'react-router-dom'
import QuizFormQuestions from './QuizFormQuestions'

export default function () {
  const { uuid } = useParams()

  const quiz = useQuizByUuid(uuid)
  const onAddQuestion = useAddQuizQuestion()
  const onEditQuestion = useEditQuizQuestion()
  const onDeleteQuestion = useDeleteQuizQuestion()

  if (!quiz) {
    throw new Error('Quiz is not found')
  }

  return (
    <QuizFormQuestions
      onAddQuestion={onAddQuestion}
      onEditQuestion={onEditQuestion}
      onDeleteQuestion={onDeleteQuestion}
      quiz={quiz}
    />
  )
}
