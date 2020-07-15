import React from 'react'
import {
  useAddQuizEmptyOption,
  useAddQuizOption,
  useDeleteQuizOption,
  useEditQuizOption,
  useIsEmptyOption,
  useQuizOptions
} from '../../modules/quiz/hooks'
import QuizFormOptions from './QuizFormOptions'

export default function ({ quiz, question }) {
  const options = useQuizOptions(quiz, question)
  const onAddEmptyOptions = useAddQuizEmptyOption()
  const onEditOption = useEditQuizOption()
  const onAddOption = useAddQuizOption()
  const isEmptyOption = useIsEmptyOption(quiz, question)
  const onDelete = useDeleteQuizOption()
  return (
    <QuizFormOptions
      quiz={quiz}
      question={question}
      options={options}
      onAddEmptyOptions={() => onAddEmptyOptions(quiz, question)}
      onEditOption={onEditOption}
      onAddOption={onAddOption}
      onDelete={onDelete}
      isEmptyOption={isEmptyOption}
    />
  )
}
