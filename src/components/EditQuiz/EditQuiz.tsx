import React from 'react'
import CreateQuiz from '../CreateQuiz/CreateQuiz'
import { UpdatedQuizQuestion, Quiz } from '../../modules/quiz/types'

type Props = {
  editedQuiz: any
  onEdit: (quiz: Quiz) => void
  onAddQuestion: (newQuestion: UpdatedQuizQuestion) => void
  onEditQuestion: (question: UpdatedQuizQuestion) => void
  onDeleteQuestion: (question: UpdatedQuizQuestion) => void
  onDelete: any
}

const EditQuiz: React.FC<Props> = ({
  editedQuiz,
  onEdit,
  onDelete,
  onAddQuestion,
  onEditQuestion,
  onDeleteQuestion
}) => {
  return (
    <CreateQuiz
      onEditQuiz={onEdit}
      onDeleteQuiz={onDelete}
      onAddQuestion={onAddQuestion}
      onEditQuestion={onEditQuestion}
      onDeleteQuestion={onDeleteQuestion}
      editedQuiz={editedQuiz}
    />
  )
}

export default EditQuiz

//класс editQuiz с методами?
