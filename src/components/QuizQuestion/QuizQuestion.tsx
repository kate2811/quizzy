import React, { useCallback } from 'react'
import style from './QuizQuestion.module.css'
import QuizAnswer from '../QuizAnswer'

type Props = {
  value: any
  onChange: any
  onRemove(): void
}

const newOption = {
  value: '',
  isCorrect: false
}

const QuizQuestion: React.FC<Props> = ({ value, onChange, onRemove }) => {
  const onAddAnswer = useCallback(() => {
    onChange(Object.assign({}, value, { options: [...value.options, newOption] }))
  }, [onChange, value])

  const onChangeTitle = useCallback((e) => onChange(Object.assign({}, value, { title: e.target.value })), [
    onChange,
    value
  ])

  const onAnswerRemove = useCallback(
    (index) => {
      onChange(Object.assign({}, value, { options: value.options.filter((item, itemIndex) => itemIndex !== index) }))
    },
    [onChange, value]
  )

  const onAnswerChange = useCallback(
    (index, newAnswer) => {
      onChange(
        Object.assign({}, value, {
          options: [...value.options.slice(0, index), newAnswer, ...value.options.slice(index + 1)]
        })
      )
    },
    [onChange, value]
  )

  return (
    <div>
      <div className={style.question}>
        <textarea
          name="question"
          placeholder="Enter your question here..."
          value={value.title}
          onChange={onChangeTitle}
        />
        <button onClick={onRemove}>
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
        {value.options.map((item, index) => (
          <QuizAnswer
            key={index}
            onRemove={() => onAnswerRemove(index)}
            value={item.value}
            isCorrect={item.isCorrect}
            onChange={(value) => onAnswerChange(index, value)}
          />
        ))}
        <button onClick={onAddAnswer}>Add answer option</button>
      </div>
    </div>
  )
}

export default QuizQuestion
