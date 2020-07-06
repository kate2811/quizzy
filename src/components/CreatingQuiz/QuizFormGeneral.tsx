import React, { ChangeEvent } from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  quiz: Omit<Quiz, 'questions'>
  onChange: (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => void
  onEdit: (quiz: Omit<Quiz, 'questions'>) => void
  editedQuiz: Quiz
}

const QuizFormGeneral: React.FC<Props> = (props) => {
  return (
    <>
      <FormInput label="Quiz title" name="title" id="title" {...props} />
      <FormTextarea label="Quiz description" name="description" id="description" {...props} />
    </>
  )
}

export default QuizFormGeneral
