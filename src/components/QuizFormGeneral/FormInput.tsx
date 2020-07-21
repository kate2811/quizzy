import React, { ChangeEvent, useCallback } from 'react'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  label: string
  type?: string
  name: string
  id: string
  quiz: Omit<Quiz, 'questions'>
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onEdit: (quiz: Omit<Quiz, 'questions'>) => void
  editedQuiz: Quiz
}

const FormInput: React.FC<Props> = ({ label, type = 'text', name, id, quiz, onChange, onEdit, editedQuiz }) => {
  const onBlur = useCallback(() => {
    editedQuiz && onEdit({ uuid: editedQuiz.uuid, ...quiz })
  }, [editedQuiz, onEdit, quiz])

  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-form-label col-3 text-lg-right text-left">
        {label}
      </label>
      <div className="col-9">
        <input
          className="form-control form-control-lg form-control-solid"
          type={type}
          name={name}
          id={id}
          value={quiz.title}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
}

export default FormInput
