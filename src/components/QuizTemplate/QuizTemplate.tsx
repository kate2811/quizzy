import React, { useCallback, useEffect, useState } from 'react'
import { Quiz } from '../../module/quiz/types'
import { keyBy, mapValues } from 'lodash'
import QuizQuestion from './QuizQuestion'
import Loader from 'react-loader-spinner'
import style from './QuizTemplate.module.css'
import { UserData } from '../../module/auth/types'
import img from '../../images/illustration/features.svg'

type Props = {
  quiz: Quiz | undefined
  isLoading: boolean
  user: UserData | null
}

const QuizTemplate: React.FC<Props> = ({ quiz, isLoading, user }) => {
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
    <div className={style.container}>
      <div className={style.info}>
        <h3 className="font-weight-bolder text-dark font-size-h1-lg text-center">
          Answer the questions,
          <br />
          and... good luck!
        </h3>
        <img className={style.background__img} src={img} height={400} alt="answer the quiz" />
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center min-vh-100 align-items-center">
          <Loader type="Bars" color="#ffd569" height={50} width={50} />
        </div>
      ) : (
        quiz &&
        answers && (
          <div className={style.card}>
            <h1 className="font-weight-bolder text-dark font-size-h1-lg">{quiz.title}</h1>
            <p className="text-muted font-weight-bold font-size-h4">{quiz.description}</p>
            {quiz.questions &&
              quiz.questions.map((item, index) => (
                <QuizQuestion
                  number={index + 1}
                  key={index}
                  value={item}
                  answers={answers[item.uuid as string]}
                  onAnswer={(answers) => onAnswer(item.uuid, answers)}
                />
              ))}
            <div className="mt-5">
              {user ? (
                <>
                  <button className="btn btn-light-success font-weight-bolder font-size-h6 px-8 py-4 mr-4">
                    Go back
                  </button>
                  <button className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4">View results</button>
                </>
              ) : (
                <button className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4">Send answers</button>
              )}
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default QuizTemplate
