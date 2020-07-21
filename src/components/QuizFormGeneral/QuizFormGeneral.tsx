import React, { useCallback, useState } from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  onEditQuiz: (quiz: Omit<Quiz, 'questions'>) => void
  onAddQuiz: (quiz: Quiz) => void
  editedQuiz: Quiz
}

const QuizFormGeneral: React.FC<Props> = ({ editedQuiz, onEditQuiz, onAddQuiz }) => {
  const [quiz, setQuiz] = useState(
    editedQuiz ? { title: editedQuiz.title, description: editedQuiz.description } : { title: '', description: '' }
  )

  const onQuizChange = useCallback(
    (e) => {
      setQuiz({ ...quiz, [e.target.name]: e.target.value })
    },
    [setQuiz, quiz]
  )

  const onClick = useCallback(() => {
    onAddQuiz({ ...quiz, questions: [] })
  }, [onAddQuiz, quiz])

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
      {!editedQuiz && (
        <button onClick={onClick} disabled={!quiz.description || !quiz.title}>
          create
        </button>
      )}
    </>
  )
}

export default QuizFormGeneral
