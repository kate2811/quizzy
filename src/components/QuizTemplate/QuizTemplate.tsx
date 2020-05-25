import React, { useCallback, useState } from 'react'
import { Quiz } from '../../module/types'
import { useQuizzes } from '../../module/hooks'
import QuizQuestion from './QuizQuestion'
import { keyBy, mapValues } from 'lodash'

type Props = {
  q?: Quiz
}

const QuizTemplate: React.FC<Props> = ({ q }) => {
  const quizzes = useQuizzes()
  const quiz = quizzes[0]
  const [answers, setAnswers] = useState(mapValues(keyBy(quiz.questions, 'uuid'), () => []))
  console.log(answers)

  const onAnswer = useCallback(
    (questionUuid, questionAnswers) => {
      setAnswers(Object.assign({}, answers, { [questionUuid]: questionAnswers }))
    },
    [setAnswers, answers]
  )

  return (
    <div>
      <h1>{quiz.title}</h1>
      {quiz.questions &&
        quiz.questions.map((item, index) => (
          <QuizQuestion
            key={index}
            value={item}
            answers={answers[item.uuid]}
            onAnswer={(answers) => onAnswer(item.uuid, answers)}
          />
        ))}
    </div>
  )
}

export default QuizTemplate
