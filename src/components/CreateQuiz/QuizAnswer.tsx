import React, { useCallback } from 'react'
import style from './CreateQuiz.module.css'
import cx from 'classnames'
import { QuizAnswer as QuizAnswerType } from '../../modules/quiz/types'

type Props = {
  title: string
  isCorrect: boolean
  onRemove(): void
  onChange(answer: QuizAnswerType): void
}

const QuizAnswer: React.FC<Props> = ({ onRemove, title, onChange, isCorrect }) => {
  const onChangeText = useCallback((e) => onChange(Object.assign({}, { isCorrect, title: e.target.value })), [
    onChange,
    isCorrect
  ])

  const onToggleIsCorrect = useCallback(() => onChange(Object.assign({}, { title, isCorrect: !isCorrect })), [
    onChange,
    title,
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
        value={title}
        onChange={onChangeText}
      />
      <button onClick={onRemove} className={cx(style.button, style.button_remove)}>
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default QuizAnswer
