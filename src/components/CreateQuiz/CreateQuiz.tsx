import React, { useCallback, useState } from 'react'
import style from './CreateQuiz.module.css'
import QuizQuestion from './QuizQuestion'
import { produce } from 'immer'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { Quiz } from '../../modules/quiz/types'
import img from '../../images/illustration/features.svg'

type Props = {
  onSubmit?: (quiz: Quiz) => void
  editedQuiz?: Quiz
  onEditQuiz?: (quizData: Omit<Quiz, 'questions'>) => void
  onDeleteQuiz?: (uuid: string) => void
}

const emptyQuestion = {
  title: '',
  options: [{ title: '', isCorrect: false }]
}

const CreateQuiz: React.FC<Props> = ({ onSubmit, editedQuiz, onEditQuiz, onDeleteQuiz }) => {
  const [questions, setQuestions] = useState(editedQuiz?.questions || [emptyQuestion])
  const [quiz, setQuiz] = useState({ description: editedQuiz?.description || '', title: editedQuiz?.title || '' })

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
    <div className={style.container}>
      <div className={style.info}>
        <h3 className="font-weight-bolder text-dark font-size-h1-lg text-center">
          Create your quiz.
          <br />
          It's easy and fun!
        </h3>
        <img className={style.background__img} src={img} height={400} alt="create a quiz" />
      </div>
      <div className={style.card}>
        <div>
          <input
            className={cx(style.quiz__title, 'h2')}
            type="text"
            name="title"
            placeholder="Enter quiz title here..."
            value={quiz.title}
            onChange={onQuizChange}
            onBlur={() => onEditQuiz && editedQuiz && onEditQuiz({ uuid: editedQuiz.uuid, ...quiz })}
          />
          <textarea
            name="description"
            placeholder="Enter quiz description here..."
            className="form-control form-control-solid h-auto py-7 px-6 rounded-lg mt-6"
            value={quiz.description}
            rows={3}
            onChange={onQuizChange}
            onBlur={() => onEditQuiz && editedQuiz && onEditQuiz({ uuid: editedQuiz.uuid, ...quiz })}
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

          <button onClick={onAdd} className="btn btn-success font-weight-bolder my-3 mr-3 mt-6">
            Add new question
          </button>
        </div>

        <div className={style.buttons_navigation}>
          <Link to="/" className="btn btn-secondary">
            Go back
          </Link>
          <button
            onClick={() =>
              onSubmit ? onSubmit({ title: quiz.title, description: quiz.description, questions }) : null
            }
            className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
            disabled={!questions[0].title && questions.length <= 1}
          >
            Publish it!
          </button>
          <button onClick={() => (onDeleteQuiz ? onDeleteQuiz(editedQuiz?.uuid as string) : null)}>delete!</button>
        </div>
      </div>
    </div>
  )
}

export default CreateQuiz

/*
<div className="form-group row">
  <label className="col-3 col-form-label">Success</label>
  <div className="col-3">
  <span className="switch switch-outline switch-icon switch-success">
  <label>
  <input type="checkbox" checked={true} name="select" />
  <span></span>
  </label>
  </span>
  </div>
  </div>*/
