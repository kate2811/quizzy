import React from 'react'
import {
  useAddQuizQuestion,
  useDeleteQuiz,
  useEditQuiz,
  useQuizByUuid,
  useEditQuizQuestion,
  useDeleteQuizQuestion
} from '../../modules/quiz/hooks'
import { useParams } from 'react-router-dom'
import CreatingQuiz from './CreatingQuiz'

export default function () {
  const { uuid } = useParams()

  const quiz = useQuizByUuid(uuid)
  const onEdit = useEditQuiz()
  const onDelete = useDeleteQuiz()
  const onAddQuestion = useAddQuizQuestion()
  const onEditQuestion = useEditQuizQuestion()
  const onDeleteQuestion = useDeleteQuizQuestion()

  if (!quiz) {
    throw new Error('Quiz is not found')
  }

  return (
    <CreatingQuiz
      onEditQuiz={onEdit}
      onDelete={onDelete}
      onAddQuestion={onAddQuestion}
      onEditQuestion={onEditQuestion}
      onDeleteQuestion={onDeleteQuestion}
      editedQuiz={quiz}
    />
  )
}
