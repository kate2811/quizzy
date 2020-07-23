import React, { useCallback, useState } from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import { Quiz } from '../../modules/quiz/types'
import Autocomplete from '../Autocomplete'

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
    !editedQuiz && onAddQuiz({ ...quiz, questions: [] })
  }, [onAddQuiz, quiz, editedQuiz])

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
      <Autocomplete />
      {!editedQuiz && (
        <div className="d-flex justify-content-end">
          <button
            onClick={onClick}
            disabled={!quiz.description || !quiz.title}
            className="btn btn-light-success font-weight-bolder font-size-h6 px-8 py-4 my-3"
          >
            Create!
          </button>
        </div>
      )}
    </>
  )
}

export default QuizFormGeneral
