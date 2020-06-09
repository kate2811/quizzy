import React, { useCallback, useState } from 'react'
import { Quiz } from '../../module/quiz/types'
import { keyBy, mapValues } from 'lodash'
import QuizQuestion from './QuizQuestion'

type Props = {
  quiz: Quiz
}

const QuizTemplate: React.FC<Props> = ({ quiz }) => {
  const [answers, setAnswers] = useState(mapValues(keyBy(quiz.questions, 'uuid'), () => []))

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
            answers={answers[item.uuid as string]}
            onAnswer={(answers) => onAnswer(item.uuid, answers)}
          />
        ))}
    </div>
  )
}

export default QuizTemplate
