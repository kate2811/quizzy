import React, { useCallback } from 'react'
import style from './QuizTemplate.module.css'

type Props = {
  value: {
    title: string
    options: { uuid: string; value: string; isCorrect: boolean }[]
  }
  onAnswer: any
  answers: string[]
}

const QuizQuestion: React.FC<Props> = ({ value, onAnswer, answers }) => {
  const onToggleAnswer = useCallback(
    (answerUuid) => {
      onAnswer(answers.includes(answerUuid) ? answers.filter((item) => item !== answerUuid) : [...answers, answerUuid])
    },
    [answers, onAnswer]
  )

  return (
    <div className={style.container}>
      <div className={style.title}>{value.title}</div>
      {value.options.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={item.value}
            onChange={() => onToggleAnswer(item.uuid)}
            checked={answers.includes(item.uuid)}
          />
          {item.value}
        </label>
      ))}
    </div>
  )
}

export default QuizQuestion
