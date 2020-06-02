import React from 'react'
import CreateQuiz from '../CreateQuiz/CreateQuiz'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  editedQuiz: Quiz
  onEdit: (quiz: Quiz) => void
  onDelete: any
}

const EditQuiz: React.FC<Props> = ({ editedQuiz, onEdit, onDelete }) => {
  return <CreateQuiz onSubmit={onEdit} editedQuiz={editedQuiz} onDelete={onDelete} />
}

export default EditQuiz
