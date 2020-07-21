import React from 'react'
import { useEditQuiz, useAddQuiz } from '../../modules/quiz/hooks'
import QuizFormGeneral from './QuizFormGeneral'

export default function ({ quiz }) {
  const onEditQuiz = useEditQuiz()
  const onAddQuiz = useAddQuiz()

  return <QuizFormGeneral onEditQuiz={onEditQuiz} onAddQuiz={onAddQuiz} editedQuiz={quiz} />
}
