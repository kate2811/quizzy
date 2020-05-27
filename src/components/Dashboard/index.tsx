import React from 'react'
import Dashboard from './Dashboard'
import { useQuizzes } from '../../module/quiz/hooks'
import { useUser } from '../../module/auth/hooks'

export default function () {
  const user = useUser()
  const quizzes = useQuizzes()

  return <Dashboard user={user} quizzes={quizzes} />
}
