import React from 'react'
import Dashboard from './Dashboard'
import { useIsQuizzesLoading, useQuizzes } from '../../modules/quiz/hooks'
import { useUser } from '../../modules/auth/hooks'

export default function () {
  const user = useUser()
  const quizzes = useQuizzes()
  const isQuizzesLoading = useIsQuizzesLoading()

  return <Dashboard user={user} quizzes={quizzes} isQuizzesLoading={isQuizzesLoading} />
}
