import React from 'react'
import CreateQuiz from '../CreateQuiz/CreateQuiz'
import { AddedQuizQuestion, Quiz } from '../../modules/quiz/types'

type Props = {
  editedQuiz: any
  onEdit: (quiz: Quiz) => void
  onAddQuestion: (newQuestion: AddedQuizQuestion) => void
  onDelete: any
}

const EditQuiz: React.FC<Props> = ({ editedQuiz, onEdit, onDelete, onAddQuestion }) => {
  return (
    <CreateQuiz onEditQuiz={onEdit} onDeleteQuiz={onDelete} onAddQuestion={onAddQuestion} editedQuiz={editedQuiz} />
  )
}

export default EditQuiz

//класс editQuiz с методами?
