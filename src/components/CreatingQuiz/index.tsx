import React from 'react'
import { useQuizByUuid } from '../../modules/quiz/hooks'
import { useParams } from 'react-router-dom'
import CreatingQuiz from './CreatingQuiz'

export default function () {
  const { uuid } = useParams()
  const quiz = useQuizByUuid(uuid)

  if (!quiz) {
    throw new Error('Quiz is not found')
  }

  return <CreatingQuiz quiz={quiz} />
}
