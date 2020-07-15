import React, { useCallback, useState } from 'react'
import { QuizAnswer, UpdateQuizOption } from '../../modules/quiz/types'
import cx from 'classnames'
import style from '../CreateQuiz/CreateQuiz.module.css'

type Props = {
  option: QuizAnswer
  onEditOption: (option: UpdateQuizOption) => void
  onAddOption: (option: UpdateQuizOption) => void
  quiz: string
  question: string
  onDelete: (quizUuid: string, questionUuid: string, optionUuid: string | undefined) => void
}

const QuizFormOption: React.FC<Props> = ({ option, onEditOption, onAddOption, quiz, question, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false)

  const onMouseEnter = useCallback(() => setIsVisible(true), [setIsVisible])
  const onMouseLeave = useCallback(() => setIsVisible(false), [setIsVisible])

  const onChange = useCallback(
    (e) =>
      option.uuid
        ? onEditOption({
            quizUuid: quiz,
            questionUuid: question,
            option: { title: e.target.value, uuid: option.uuid, isCorrect: false }
          })
        : onAddOption({ quizUuid: quiz, questionUuid: question, option: { title: e.target.value, isCorrect: false } }),
    [onEditOption, question, quiz, onAddOption, option]
  )

  const onQuestionDelete = useCallback(() => onDelete(quiz, question, option.uuid), [question, onDelete, quiz, option])

  return (
    <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={style.option}>
      <input
        type="text"
        value={option.title}
        onChange={onChange}
        className="form-control form-control-lg form-control-solid"
      />
      <button
        className={cx(style.question__closeBtn, !isVisible && style.question__closeBtn_hidden)}
        onClick={onQuestionDelete}
      >
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default QuizFormOption
