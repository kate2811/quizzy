import React from 'react'
import { useDeleteQuiz } from '../../modules/quiz/hooks'
import QuizFormSettings from './QuizFormSettings'

export default function ({ quiz }) {
  const onDelete = useDeleteQuiz()

  return <QuizFormSettings onDelete={onDelete} quizUuid={quiz.uuid} />
}
