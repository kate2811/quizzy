import React, {useCallback, useState} from 'react'
import style from './QuizQuestion.module.css'
import QuizAnswer from "../QuizAnswer"

type Props = {
  onRemove: (index: number) => void
  index: number
}

const QuizQuestion: React.FC<Props> = ({ onRemove, index }) => {
  const [answers, setAnswers] = useState([''])

  const onAddBtnClick = useCallback(() => {
    setAnswers([...answers, ''])
  }, [setAnswers, answers])

  return (
    <div>
      <div className={style.question}>
        <textarea name="question" rows={5} cols={45} placeholder="Enter your question here..."></textarea>
        <button onClick={() => onRemove(index)}>
          <i className="fas fa-times-circle" />
        </button>
      </div>

      <div className={style.attachments}>
        <button>
          <i className="fas fa-image" />
          <i className="fas fa-video" />
        </button>
      </div>

      <div className={style.answers}>
        {answers.map((item, index) => <QuizAnswer key={index} />)}
        <button onClick={onAddBtnClick}>Add answer option</button>
      </div>
    </div>
  )
}

export default QuizQuestion
