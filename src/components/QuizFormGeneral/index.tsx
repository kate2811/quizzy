import React from 'react'
import { useEditQuiz } from '../../modules/quiz/hooks'
import QuizFormGeneral from './QuizFormGeneral'

export default function ({ quiz }) {
  const onEditQuiz = useEditQuiz()

  return <QuizFormGeneral onEditQuiz={onEditQuiz} editedQuiz={quiz} />
}
