import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuizTemplate from './QuizTemplate'
import { useQuizByUuid, useLoadQuizByUuid } from '../../modules/quiz/hooks'
import { useUser } from '../../modules/auth/hooks'

export default function () {
  const { uuid } = useParams()
  const user = useUser()
  const quiz = useQuizByUuid(uuid)
  const loadQuiz = useLoadQuizByUuid(uuid)

  useEffect(() => {
    if (!user && !quiz) {
      loadQuiz()
    }
  }, [])

  return <QuizTemplate quiz={quiz} user={user} />
}
