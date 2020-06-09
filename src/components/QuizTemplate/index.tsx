import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuizTemplate from './QuizTemplate'
import { useQuizByUuid, useLoadQuizByUuid, useIsQuizzesLoading } from '../../module/quiz/hooks'
import { useUser } from '../../module/auth/hooks'
import Loader from 'react-loader-spinner'

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
  })

  if (!quiz) {
    return <Loader />
  }

  return <QuizTemplate quiz={quiz as any} isLoading={isLoading} />
}
