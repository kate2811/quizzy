import React, { useCallback, useState } from 'react'
import { Quiz } from '../../module/quiz/types'
import { useQuizzes } from '../../module/quiz/hooks'
import QuizQuestion from './QuizQuestion'
import { keyBy, mapValues } from 'lodash'
import Loader from 'react-loader-spinner'
import { UserData } from '../../module/auth/types'
import { Link } from 'react-router-dom'

type Props = {
  quiz: Quiz | undefined
  isLoading: boolean
  user: UserData | null
}

const QuizTemplate: React.FC<Props> = ({ quiz, isLoading, user }) => {
  const [answers, setAnswers] = useState(quiz ? mapValues(keyBy(quiz.questions, 'uuid'), () => []) : [])

  const onAnswer = useCallback(
    (questionUuid, questionAnswers) => {
      setAnswers(Object.assign({}, answers, { [questionUuid]: questionAnswers }))
    },
    [setAnswers, answers]
  )

  return (
    <div>
      {isLoading || !quiz ? (
        <Loader type="Bars" color="#157FFB" height={40} width={40} />
      ) : (
        <>
          <h1>{quiz.title}</h1>
          <div>{quiz.description}</div>
          {quiz.questions &&
            quiz.questions.map((item, index) => (
              <QuizQuestion
                key={index}
                value={item}
                answers={answers[item.uuid as string]}
                onAnswer={(answers) => onAnswer(item.uuid, answers)}
              />
            ))}
          <div className="d-flex justify-content-center align-items-center">
            {user && (
              <Link to="/" className="btn btn-secondary mr-4">
                Go back
              </Link>
            )}
            <button className="btn btn-warning btn-lg">Send</button>
          </div>
        </>
      )}
    </div>
  )
}

export default QuizTemplate
