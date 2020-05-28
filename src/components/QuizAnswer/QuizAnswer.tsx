import React, { useCallback } from 'react'
import style from './QuizAnswer.module.css'
import cx from 'classnames'

type Props = {
  value: string
  isCorrect: boolean
  onRemove(): void
  onChange(answer: { value: string; isCorrect: boolean }): void
}

const QuizAnswer: React.FC<Props> = ({ onRemove, value, onChange, isCorrect }) => {
  const onChangeText = useCallback((e) => onChange(Object.assign({}, { isCorrect, value: e.target.value })), [
    onChange,
    isCorrect
  ])
  const onToggleIsCorrect = useCallback(() => onChange(Object.assign({}, { value, isCorrect: !isCorrect })), [
    onChange,
    value,
    isCorrect
  ])
  return (
    <div className={style.answer}>
      <button
        onClick={onToggleIsCorrect}
        className={cx(style.button, style.button_correct, isCorrect ? style.button_selected : null)}
      >
        <i className="fas fa-check" />
      </button>
      <input
        className="form-control w-75 d-inline"
        type="text"
        placeholder="Enter answer option"
        value={value}
        onChange={onChangeText}
      />
      <button onClick={onRemove} className={cx(style.button, style.button_remove)}>
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default QuizAnswer
