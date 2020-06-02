import React, { useCallback, useState } from 'react'
import PageLayout from '../PageLayout'
import style from './CreateQuiz.module.css'
import QuizQuestion from './QuizQuestion'
import { produce } from 'immer'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  onSubmit: (quiz: Quiz) => void
  onDelete?: (uuid: string) => void
  editedQuiz?: Quiz
}

const emptyQuestion = {
  title: '',
  description: 'some description',
  options: [{ title: '', isCorrect: false }]
}

const CreateQuiz: React.FC<Props> = ({ onSubmit, editedQuiz, onDelete }) => {
  const [questions, setQuestions] = useState(editedQuiz ? (editedQuiz.questions as []) : [emptyQuestion])
  const [quiz, setQuiz] = useState(
    editedQuiz ? { description: editedQuiz.description, title: editedQuiz.title } : { description: '', title: '' }
  )

  const onAdd = useCallback(() => {
    setQuestions([...questions, emptyQuestion])
  }, [setQuestions, questions])

  const onRemove = useCallback(
    (index) => {
      setQuestions(questions.filter((item, itemIndex) => itemIndex !== index))
    },
    [setQuestions, questions]
  )

  const onChange = useCallback(
    (index, item) => {
      setQuestions(
        produce(questions, (draft) => {
          draft[index] = item
        })
      )
    },
    [setQuestions, questions]
  )

  const onQuizChange = useCallback(
    (e) => {
      setQuiz({ ...quiz, [e.target.name]: e.target.value })
    },
    [setQuiz, quiz]
  )

  return (
    <PageLayout>
      <div className={style.container}>
        <input
          className={cx(style.quiz__title, 'h2')}
          type="text"
          name="title"
          placeholder="Enter quiz title here..."
          value={quiz.title}
          onChange={onQuizChange}
        />
        <textarea
          name="description"
          placeholder="Enter quiz description here..."
          className={cx('form-control', style.quiz__description)}
          value={quiz.description}
          onChange={onQuizChange}
        />

        <div className={style.questions}>
          {questions.map((item, index) => (
            <QuizQuestion
              key={index}
              number={index + 1}
              onRemove={() => onRemove(index)}
              value={item}
              onChange={(value) => onChange(index, value)}
            />
          ))}
        </div>

        <button onClick={onAdd} className={cx('btn', 'btn-warning', 'mt-3', style.button_addQuestion)}>
          Add new question
        </button>
      </div>
      <div className={style.buttons_navigation}>
        <Link to="/" className="btn btn-secondary">
          Go back
        </Link>
        <button
          onClick={() =>
            onSubmit(
              editedQuiz
                ? { uuid: editedQuiz.uuid, title: quiz.title, description: quiz.description, questions, isActive: true }
                : { title: quiz.title, description: quiz.description, questions, isActive: true }
            )
          }
          className="btn btn-warning btn-lg"
          disabled={!questions[0].title && questions.length <= 1}
        >
          {editedQuiz ? 'Save it' : 'Publish it!'}
        </button>
        {onDelete && editedQuiz && (
          <button className="btn btn-secondary" onClick={() => onDelete(editedQuiz.uuid as string)}>
            Delete
          </button>
        )}
      </div>
    </PageLayout>
  )
}

export default CreateQuiz
