import React, { useCallback } from 'react'
import style from './QuizTemplate.module.css'
import { QuizQuestion as QuizQuestionType } from '../../modules/quiz/types'

type Props = {
  value: QuizQuestionType
  onAnswer: (uuid: string[]) => void
  answers: string[]
  number: number
}

const QuizQuestion: React.FC<Props> = ({ value, onAnswer, answers, number }) => {
  const onToggleAnswer = useCallback(
    (answerUuid) => {
      onAnswer(answers.includes(answerUuid) ? answers.filter((item) => item !== answerUuid) : [...answers, answerUuid])
    },
    [answers, onAnswer]
  )

  return (
    <div className={style.container_question}>
      <div className="font-size-h6 font-weight-bolder text-dark mb-2">Question {number}</div>
      <div className="form-control form-control-solid font-size-lg mb-5 h-auto py-7 px-6 rounded-lg">{value.title}</div>
      <div className="checkbox-list">
        {value.options.map((item, index) => (
          <label key={index} className="checkbox checkbox-success font-size-lg">
            <input
              type="checkbox"
              value={item.title}
              onChange={() => onToggleAnswer(item.uuid)}
              checked={answers.includes(item.uuid as string)}
            />
            <span />
            {item.title}
          </label>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestion
