import React from 'react'
import Dashboard from './Dashboard'
import {useQuizzes, useUser} from '../../module/hooks'

export default function () {
  const user = useUser()
  const quizzes = useQuizzes()

  return <Dashboard user={user} quizzes={quizzes} />
}
