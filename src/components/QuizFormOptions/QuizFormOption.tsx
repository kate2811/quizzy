import React, { useCallback, useMemo, useState } from 'react'
import { QuizAnswer, UpdateQuizOption } from '../../modules/quiz/types'
import cx from 'classnames'
import style from './QuizFormOptions.module.css'

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

  const editedOption = useMemo(() => {
    return { quizUuid: quiz, questionUuid: question }
  }, [question, quiz])

  const onChange = useCallback(
    (e) =>
      option.uuid
        ? onEditOption({
            ...editedOption,
            option: { ...option, title: e.target.value }
          })
        : onAddOption({ ...editedOption, option: { title: e.target.value, isCorrect: true } }),
    [onEditOption, onAddOption, option, editedOption]
  )

  const onCorrectChange = useCallback(() => {
    onEditOption({
      ...editedOption,
      option: { ...option, isCorrect: !option.isCorrect }
    })
  }, [onEditOption, option, editedOption])

  const onQuestionDelete = useCallback(() => onDelete(quiz, question, option.uuid), [question, onDelete, quiz, option])

  return (
    <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={cx('input-group', style.option)}>
      <div className="input-group-prepend w-100">
        <button
          className={cx(
            'btn',
            option.isCorrect ? 'btn-light-success' : 'btn-light-danger',
            style.option__button_isCorrect
          )}
          onClick={onCorrectChange}
          disabled={!option.uuid}
        >
          <i className={cx('far', option.isCorrect ? 'fa-check-circle' : 'fa-times-circle')} />
        </button>

        <input
          type="text"
          value={option.title}
          onChange={onChange}
          className={cx('form-control form-control-lg form-control-solid', style.option__field)}
        />
        <button className={cx(style.btnClose, !isVisible && style.btnClose_hidden)} onClick={onQuestionDelete}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  )
}

export default QuizFormOption
