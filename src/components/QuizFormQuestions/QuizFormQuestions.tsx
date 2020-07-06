import React, { useCallback, useState } from 'react'
import { Quiz, UpdatedQuizQuestion } from '../../modules/quiz/types'
import QuizQuestion from '../CreateQuiz/QuizQuestion'
import { produce } from 'immer'

type Props = {
  quiz: Quiz
  onAddQuestion?: (newQuestion: UpdatedQuizQuestion) => void
  onEditQuestion?: (question: UpdatedQuizQuestion) => void
  onDeleteQuestion: (question: UpdatedQuizQuestion) => void
}

const QuizFormQuestions: React.FC<Props> = ({ quiz, onDeleteQuestion, ...props }) => {
  const [questions, setQuestions] = useState(quiz.questions)

  /*  const onQuestionChange = useCallback(
    (index, item) => {
      setQuestions(
        produce(questions, (draft) => {
          draft[index] = item
        })
      )
    },
    [setQuestions, questions]
  )

  const onQuestionRemove = useCallback(
    (item, index) => {
      setQuestions(questions.filter((item, itemIndex) => itemIndex !== index))
      onDeleteQuestion({ quizUuid: quiz.uuid, question: item })
    },
    [setQuestions, questions, onDeleteQuestion, quiz]
  )*/

  return (
    <div>
      {/*   {questions.map((item, index) => (
        <QuizQuestion
          quiz={quiz}
          key={index}
          number={index + 1}
          onRemove={() => onQuestionRemove(item, index)}
          value={item}
          onChange={(value) => onQuestionChange(index, value)}
          onAddQuestion={props.onAddQuestion}
          onEditQuestion={props.onEditQuestion}
        />
      ))}*/}
    </div>
  )
}

export default QuizFormQuestions
