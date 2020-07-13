import React from 'react'
import { Quiz } from '../../modules/quiz/types'
import CreatingQuiz from '../CreatingQuiz/CreatingQuiz'

const EditQuiz: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  return <CreatingQuiz quiz={quiz} />
}

export default EditQuiz
