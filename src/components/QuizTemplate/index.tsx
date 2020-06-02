import React from 'react'
import { useParams } from 'react-router-dom'
import QuizTemplate from './QuizTemplate'
import { useGetQuizByUuid, useIsQuizzesLoading, useQuizByUuid } from '../../modules/quiz/hooks'
import { useUser } from '../../modules/auth/hooks'

export default function () {
  const { uuid } = useParams()
  const isLoading = useIsQuizzesLoading()
  const user = useUser()
  let quiz

  if (user) {
    quiz = useQuizByUuid(uuid)
  } else {
    useGetQuizByUuid(uuid)
  }

  return <QuizTemplate isLoading={isLoading} quiz={quiz} user={user} />
}
