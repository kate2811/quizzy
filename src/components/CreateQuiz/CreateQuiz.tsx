import React, { useCallback, useState } from 'react'
import PageLayout from '../PageLayout'
import style from './CreateQuiz.module.css'
import QuizQuestion from './QuizQuestion'
import { produce } from 'immer'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { Quiz } from '../../module/quiz/types'

type Props = {
  onSubmit: (quiz: Quiz) => void
}

const emptyQuestion = {
  title: '',
  description: 'some description',
  options: []
}

const CreateQuiz: React.FC<Props> = ({ onSubmit }) => {
  const [questions, setQuestions] = useState([emptyQuestion])
  const [quiz, setQuiz] = useState({ description: '', title: '' })

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
          onClick={() => onSubmit({ title: quiz.title, description: quiz.description, questions, isActive: true })}
          className="btn btn-warning btn-lg"
          disabled={!questions[0].title && questions.length <= 1}
        >
          Publish it!
        </button>
      </div>
    </PageLayout>
  )
}

export default CreateQuiz
