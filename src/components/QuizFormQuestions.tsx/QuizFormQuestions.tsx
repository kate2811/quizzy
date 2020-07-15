import React, { useCallback } from 'react'
import { Quiz, QuizQuestion, UpdatedQuizQuestion } from '../../modules/quiz/types'
import QuizFormQuestion from './QuizFormQuestion'

type Props = {
  quiz: Required<Quiz>
  questions: QuizQuestion[] | undefined
  onAddQuestion: (newQuestion: UpdatedQuizQuestion) => void
  onEditQuestion: (question: UpdatedQuizQuestion) => void
  onDeleteQuestion: (quizUuid: string, questionUuid: string | undefined) => void
  onAddEmptyQuestion: (quizUuid: string) => void
  isEmptyQuestion: boolean | undefined
}

const QuizFormQuestions: React.FC<Props> = ({ quiz, questions, onAddEmptyQuestion, isEmptyQuestion, ...props }) => {
  const onAddQuestionClick = useCallback(() => {
    onAddEmptyQuestion(quiz.uuid)
  }, [quiz, onAddEmptyQuestion])

  return (
    <div>
      {questions &&
        questions.map((item, index) => (
          <QuizFormQuestion key={index} question={item} quizUuid={quiz.uuid} {...props} />
        ))}

      <button
        className="btn btn-success font-weight-bolder my-3 mr-3 mt-6"
        onClick={onAddQuestionClick}
        disabled={isEmptyQuestion}
      >
        Add new question
      </button>
    </div>
  )
}

export default QuizFormQuestions
