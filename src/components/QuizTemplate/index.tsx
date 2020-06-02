import React from 'react'
import { useParams } from 'react-router-dom'
import QuizTemplate from './QuizTemplate'
import { useGetQuizByUuid, useIsQuizzesLoading, useQuizByUuid } from '../../modules/quiz/hooks'
import { useUser } from '../../modules/auth/hooks'

export default function () {
  const { uuid } = useParams()
  const user = useUser()
  if (!user) {
    useGetQuizByUuid(uuid)
  }

  const quiz = useQuizByUuid(uuid)
  const isLoading = useIsQuizzesLoading()

  return <QuizTemplate isLoading={isLoading} quiz={quiz} user={user} />
}
