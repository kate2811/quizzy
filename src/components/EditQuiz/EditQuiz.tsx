import React from 'react'
import CreateQuiz from '../CreateQuiz/CreateQuiz'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  editedQuiz: any
  onEdit: (quiz: Quiz) => void
  onDelete: any
}

const EditQuiz: React.FC<Props> = ({ editedQuiz, onEdit, onDelete }) => {
  return <CreateQuiz onEditQuiz={onEdit} editedQuiz={editedQuiz} />
}

export default EditQuiz
