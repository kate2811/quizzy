import React, { useCallback } from 'react'
import style from './CreateQuiz.module.css'
import QuizAnswer from './QuizAnswer'
import cx from 'classnames'
import { QuizQuestion as QuizQuestionType } from '../../module/quiz/types'

type Props = {
  value: QuizQuestionType
  onChange: (value: QuizQuestionType) => void
  onRemove(): void
  number: number
}

const newOption = {
  title: '',
  isCorrect: false
}

const QuizQuestion: React.FC<Props> = ({ value, onChange, onRemove, number }) => {
  const onAddAnswer = useCallback(
    () => onChange(Object.assign({}, value, { options: [...value.options, newOption] })),
    [onChange, value]
  )

  const onChangeTitle = useCallback((e) => onChange(Object.assign({}, value, { title: e.target.value })), [
    onChange,
    value
  ])

  const onAnswerRemove = useCallback(
    (index) =>
      onChange(Object.assign({}, value, { options: value.options.filter((item, itemIndex) => itemIndex !== index) })),
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
        <span className={style.question__number}>{number}.</span>
        <div className={style.question__body}>
          <textarea
            className={cx(style.question__input, 'form-control')}
            name="question"
            placeholder="Enter your question here..."
            value={value.title}
            onChange={onChangeTitle}
          />

          <div className={style.attachments}>
            <button>
              <i className="fas fa-image" />
            </button>
            <button>
              <i className="fas fa-video" />
            </button>
          </div>
        </div>

        <button className={style.question__closeBtn} onClick={onRemove}>
          <i className="fas fa-times" />
        </button>
      </div>

      <div className={style.answers}>
        {value.options.map((item, index) => (
          <QuizAnswer
            key={index}
            onRemove={() => onAnswerRemove(index)}
            title={item.title}
            isCorrect={item.isCorrect}
            onChange={(value) => onAnswerChange(index, value)}
          />
        ))}
        <button onClick={onAddAnswer} className={cx('btn', 'btn-outline-secondary', 'btn-sm', style.button_addOption)}>
          Add answer option
        </button>
      </div>
    </div>
  )
}

export default QuizQuestion
