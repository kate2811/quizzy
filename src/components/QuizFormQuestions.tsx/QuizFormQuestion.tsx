import React, { useCallback } from 'react'
import style from '../CreateQuiz/CreateQuiz.module.css'
import { QuizQuestion, UpdatedQuizQuestion } from '../../modules/quiz/types'

type Props = {
  quizUuid: string
  onDeleteQuestion: (quizUuid: string, questionUuid: string) => void
  onDeleteEmptyQuestion: (quizUuid: string) => void
  question: QuizQuestion
  onAddQuestion: (newQuestion: UpdatedQuizQuestion) => void
  onEditQuestion: (question: UpdatedQuizQuestion) => void
}

const QuizFormQuestion: React.FC<Props> = ({
  quizUuid,
  onDeleteQuestion,
  onDeleteEmptyQuestion,
  question,
  onAddQuestion,
  onEditQuestion
}) => {
  const onTitleChange = useCallback(
    (e) =>
      !question.title
        ? onAddQuestion({ quizUuid: quizUuid, question: { title: e.target.value, options: question.options } })
        : onEditQuestion({
            quizUuid: quizUuid,
            question: { uuid: question.uuid, options: question.options, title: e.target.value }
          }),
    [question, onEditQuestion, quizUuid]
  )

  const onQuestionDelete = useCallback(
    () => (question.uuid ? onDeleteQuestion(quizUuid, question.uuid) : onDeleteEmptyQuestion(quizUuid)),
    [question, onDeleteQuestion, quizUuid, onDeleteEmptyQuestion]
  )

  return (
    <div>
      <div className={style.question}>
        <div className={style.question__body}>
          <textarea
            className="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
            name="question"
            placeholder="Enter your question here..."
            value={question.title}
            onChange={onTitleChange}
          />
        </div>

        <button className={style.question__closeBtn} onClick={onQuestionDelete}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  )
}

export default QuizFormQuestion
