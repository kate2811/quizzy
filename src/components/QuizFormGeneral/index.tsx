import React from 'react'
import { useEditQuiz, useAddQuiz, useAddQuizTags, useRemoveQuizTags } from '../../modules/quiz/hooks'
import QuizFormGeneral from './QuizFormGeneral'

export default function ({ quiz }) {
  const onEditQuiz = useEditQuiz()
  const onAddQuiz = useAddQuiz()
  const onAddQuizTags = useAddQuizTags()
  const onRemoveQuizTags = useRemoveQuizTags()

  return (
    <QuizFormGeneral
      onAddQuizTags={onAddQuizTags}
      onRemoveQuizTags={onRemoveQuizTags}
      onEditQuiz={onEditQuiz}
      onAddQuiz={onAddQuiz}
      editedQuiz={quiz}
    />
  )
}
