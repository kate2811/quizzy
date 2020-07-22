import React from 'react'
import { Quiz } from '../../modules/quiz/types'
import CreateQuiz from '../CreateQuiz/CreateQuiz'

const EditQuiz: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  return <CreateQuiz quiz={quiz} />
}

export default EditQuiz
