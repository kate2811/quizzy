import React from 'react'
import { useQuizByUuid } from '../../modules/quiz/hooks'
import EditQuiz from './EditQuiz'
import { useParams } from 'react-router-dom'

export default function () {
  const { uuid } = useParams()
  const quiz = useQuizByUuid(uuid)

  if (!quiz) {
    throw new Error('Quiz is not found')
  }

  return <EditQuiz quiz={quiz} />
}
