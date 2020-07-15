import React, { useCallback, useState } from 'react'
import style from '../CreateQuiz/CreateQuiz.module.css'
import { QuizQuestion, UpdatedQuizQuestion } from '../../modules/quiz/types'
import cx from 'classnames'
import QuizFormOptions from '../QuizFormOptions'

type Props = {
  quizUuid: string
  onDeleteQuestion: (quizUuid: string, questionUuid: string | undefined) => void
  question: QuizQuestion
  onAddQuestion: (newQuestion: UpdatedQuizQuestion) => void
  onEditQuestion: (question: UpdatedQuizQuestion) => void
}

const QuizFormQuestion: React.FC<Props> = ({ quizUuid, onDeleteQuestion, question, onAddQuestion, onEditQuestion }) => {
  const [isVisible, setIsVisible] = useState(false)

  const onMouseEnter = useCallback(() => setIsVisible(true), [setIsVisible])
  const onMouseLeave = useCallback(() => setIsVisible(false), [setIsVisible])

  const onTitleChange = useCallback(
    (e) =>
      !question.title
        ? onAddQuestion({ quizUuid: quizUuid, question: { title: e.target.value, options: question.options } })
        : onEditQuestion({
            quizUuid: quizUuid,
            question: { uuid: question.uuid, options: question.options, title: e.target.value }
          }),
    [question, onEditQuestion, quizUuid, onAddQuestion]
  )

  const onQuestionDelete = useCallback(() => onDeleteQuestion(quizUuid, question.uuid), [
    question,
    onDeleteQuestion,
    quizUuid
  ])

  return (
    <div>
      <div className={style.question}>
        <div className={style.question__body} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <textarea
            className="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
            name="question"
            placeholder="Enter your question here..."
            value={question.title}
            onChange={onTitleChange}
            rows={4}
          />

          <button
            className={cx(style.question__closeBtn, !isVisible && style.question__closeBtn_hidden)}
            onClick={onQuestionDelete}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <QuizFormOptions quiz={quizUuid} question={question.uuid} />
    </div>
  )
}

export default QuizFormQuestion
