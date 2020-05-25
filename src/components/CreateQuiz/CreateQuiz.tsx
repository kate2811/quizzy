import React, { useCallback, useState } from 'react'
import PageLayout from '../PageLayout'
import style from './CreateQuiz.module.css'
import QuizQuestion from '../QuizQuestion'
import { produce } from 'immer'
import { UserData } from '../../module/types'

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
      <h1>Create a quiz</h1>
      <div className={style.container}>
        <input
          className={style.input_title}
          type="text"
          name="title"
          placeholder="Enter quiz title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className={style.container}>
          {questions.map((item, index) => (
            <QuizQuestion
              key={index}
              onRemove={() => onRemove(index)}
              value={item}
              onChange={(value) => onChange(index, value)}
            />
          ))}
        </div>

        <button onClick={onAdd}>Add new question</button>
      </div>
      <button onClick={() => onSubmit({ title, questions })}>Publish</button>
    </PageLayout>
  )
}

export default CreateQuiz
