import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuizTemplate from './QuizTemplate'
import { useQuizByUuid, useLoadQuizByUuid, useIsQuizzesLoading } from '../../module/quiz/hooks'
import { useUser } from '../../module/auth/hooks'

export default function () {
  const { uuid } = useParams()
  const user = useUser()
  const quiz = useQuizByUuid(uuid)
  const loadQuiz = useLoadQuizByUuid(uuid)
  const isLoading = useIsQuizzesLoading()

  useEffect(() => {
    if (!user && !quiz) {
      loadQuiz()
    }
  }, [])

  return <QuizTemplate quiz={quiz} isLoading={isLoading} user={user} />
}
