import React from 'react'
import { useEditQuiz, useQuizByUuid } from '../../modules/quiz/hooks'
import { useParams } from 'react-router-dom'
import QuizFormGeneral from './QuizFormGeneral'

export default function () {
  const { uuid } = useParams()

  const quiz = useQuizByUuid(uuid)
  const onEditQuiz = useEditQuiz()

  if (!quiz) {
    throw new Error('Quiz is not found')
  }

  return <QuizFormGeneral onEditQuiz={onEditQuiz} editedQuiz={quiz} />
}
