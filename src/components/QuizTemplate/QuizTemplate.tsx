import React, { useCallback, useEffect, useState } from 'react'
import { Quiz } from '../../module/quiz/types'
import { keyBy, mapValues } from 'lodash'
import QuizQuestion from './QuizQuestion'
import Loader from 'react-loader-spinner'

type Props = {
  quiz: Quiz | undefined
  isLoading: boolean
}

const QuizTemplate: React.FC<Props> = ({ quiz, isLoading }) => {
  const [answers, setAnswers] = useState()
  useEffect(() => {
    if (quiz) {
      setAnswers(mapValues(keyBy(quiz.questions, 'uuid'), () => []))
    }
  }, [setAnswers, quiz])

  const onAnswer = useCallback(
    (questionUuid, questionAnswers) => {
      setAnswers(Object.assign({}, answers, { [questionUuid]: questionAnswers }))
    },
    [setAnswers, answers]
  )

  return (
    <div>
      {isLoading && <Loader />}
      {quiz && answers && (
        <>
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
        </>
      )}
    </div>
  )
}

export default QuizTemplate
