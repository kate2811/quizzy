import React from 'react'
import { useDeleteQuiz, useEditQuiz, useQuizByUuid } from '../../modules/quiz/hooks'
import EditQuiz from './EditQuiz'
import { useParams } from 'react-router-dom'

export default function () {
  const { uuid } = useParams()

  const quiz = useQuizByUuid(uuid)
  const onEdit = useEditQuiz()
  const onDelete = useDeleteQuiz()

  if (!quiz) {
    throw new Error('Quiz is not found')
  }

  return <EditQuiz onEdit={onEdit} onDelete={onDelete} editedQuiz={quiz} />
}
