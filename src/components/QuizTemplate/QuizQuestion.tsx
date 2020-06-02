import React, { useCallback } from 'react'
import style from './QuizTemplate.module.css'
import { QuizQuestion as QuizQuestionType } from '../../module/quiz/types'

type Props = {
  value: QuizQuestionType
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
            value={item.title}
            onChange={() => onToggleAnswer(item.uuid)}
            checked={answers.includes(item.uuid as string)}
          />
          {item.title}
        </label>
      ))}
    </div>
  )
}

export default QuizQuestion
