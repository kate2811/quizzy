import React, { useCallback, useState } from 'react'
import PageLayout from '../PageLayout'
import style from './CreateQuiz.module.css'
import QuizQuestion from '../QuizQuestion'
import { produce } from 'immer'
import cx from 'classnames'

const emptyQuestion = {
  title: '',
  options: []
}

type Props = {
  onSubmit: (quiz: { questions: { options: any[]; title: string }[]; title: string }) => void
}

const CreateQuiz: React.FC<Props> = ({ onSubmit }) => {
  const [questions, setQuestions] = useState([emptyQuestion])
  const [title, setTitle] = useState('')

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

  return (
    <PageLayout>
      <div className={style.container}>
        <input
          className={cx(style.quiz__title, 'h2')}
          type="text"
          name="title"
          placeholder="Enter quiz title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

        <button onClick={onAdd} className="btn btn-warning mt-3">
          Add new question
        </button>
      </div>
      <button
        onClick={() => onSubmit({ title, questions })}
        className="btn btn-warning btn-lg m-auto d-block"
        disabled={!questions[0].title && questions.length <= 1}
      >
        Publish it!
      </button>
    </PageLayout>
  )
}

export default CreateQuiz
