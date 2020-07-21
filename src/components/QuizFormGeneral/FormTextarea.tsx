import React, { ChangeEvent, useCallback } from 'react'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  label: string
  rows?: number
  name: string
  id: string
  quiz: Omit<Quiz, 'questions'>
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onEdit: (quiz: Omit<Quiz, 'questions'>) => void
  editedQuiz: Quiz
}

const FormTextarea: React.FC<Props> = ({ label, rows = 3, name, id, quiz, onChange, onEdit, editedQuiz }) => {
  const onBlur = useCallback(() => {
    editedQuiz && onEdit({ uuid: editedQuiz.uuid, ...quiz })
  }, [editedQuiz, onEdit, quiz])

  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-form-label col-3 text-lg-right text-left">
        {label}
      </label>
      <div className="col-9">
        <textarea
          className="form-control form-control-lg form-control-solid"
          rows={rows}
          name={name}
          id={id}
          value={quiz.description}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
}

export default FormTextarea
