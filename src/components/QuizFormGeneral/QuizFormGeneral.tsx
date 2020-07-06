import React, { useCallback, useState } from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  onEditQuiz: (quiz: Omit<Quiz, 'questions'>) => void
  editedQuiz: Quiz
}

const QuizFormGeneral: React.FC<Props> = ({ editedQuiz, onEditQuiz }) => {
  const [quiz, setQuiz] = useState({ description: editedQuiz.description, title: editedQuiz?.title })

  const onQuizChange = useCallback(
    (e) => {
      setQuiz({ ...quiz, [e.target.name]: e.target.value })
    },
    [setQuiz, quiz]
  )

  return (
    <>
      <FormInput
        label="Quiz title"
        name="title"
        id="title"
        editedQuiz={editedQuiz}
        onChange={onQuizChange}
        quiz={quiz}
        onEdit={onEditQuiz}
      />
      <FormTextarea
        label="Quiz description"
        name="description"
        id="description"
        editedQuiz={editedQuiz}
        onChange={onQuizChange}
        quiz={quiz}
        onEdit={onEditQuiz}
      />
    </>
  )
}

export default QuizFormGeneral
