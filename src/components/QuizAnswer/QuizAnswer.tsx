import React, { useCallback } from 'react'
import style from './QuizAnswer.module.css'

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
      <input type="text" placeholder="Enter answer option" value={value} onChange={onChangeText} />
      <button onClick={onToggleIsCorrect}>
        {isCorrect.toString()}
        <i className="fas fa-check" />
      </button>
      <button onClick={onRemove}>
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default QuizAnswer
