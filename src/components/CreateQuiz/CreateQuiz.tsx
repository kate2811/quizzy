import React, {useCallback, useState} from 'react'
import PageLayout from '../PageLayout'
import style from './CreateQuiz.module.css'
import QuizQuestion from "../QuizQuestion"

const emptyQuestion = {
  title: '',
  options: [],
  rightAnswers: []
}

const CreateQuiz: React.FC = () => {
  const [questions, setQuestions] = useState([emptyQuestion])

  const onAddBtnClick = useCallback(() => {
  setQuestions([...questions, emptyQuestion])
  }, [setQuestions, questions])

  function onRemove(index: number) {
    console.log(index)
  }

  return (
    <PageLayout>
      <h1>Create a quiz</h1>
      <div className={style.container}>
        <input className={style.input_title} type="text" name='title' placeholder='Enter quiz title here...'/>

        <div className={style.container}>
          {questions.map((item, index) => <QuizQuestion key={index} onRemove={onRemove} index={index} />)}
        </div>

        <button onClick={onAddBtnClick}>Add new question</button>
      </div>
    </PageLayout>
  )
}

export default CreateQuiz
