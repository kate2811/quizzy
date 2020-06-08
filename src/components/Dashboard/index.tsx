import React from 'react'
import Dashboard from './Dashboard'
import { useIsQuizzesLoading, useQuizzes } from '../../module/quiz/hooks'
import { useUser } from '../../module/auth/hooks'

export default function () {
  const user = useUser()
  const quizzes = useQuizzes()
  const isQuizzesLoading = useIsQuizzesLoading()

  return <Dashboard user={user} quizzes={quizzes} isQuizzesLoading={isQuizzesLoading} />
}
