import React from 'react'
import { useParams } from 'react-router-dom'
import QuizTemplate from './QuizTemplate'
import { useQuizByUuid } from '../../module/quiz/hooks'
import { useUser } from '../../module/auth/hooks'

export default function () {
  const { uuid } = useParams()
  const user = useUser()
  let quiz
  if (user) {
    quiz = useQuizByUuid(uuid)
  }

  return <QuizTemplate quiz={quiz} />
}
