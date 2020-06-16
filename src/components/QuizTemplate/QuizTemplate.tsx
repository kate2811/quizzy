import React, { useCallback, useEffect, useState } from 'react'
import { Quiz } from '../../modules/quiz/types'
import { keyBy, mapValues } from 'lodash'
import QuizQuestion from './QuizQuestion'
import style from './QuizTemplate.module.css'
import { UserData } from '../../modules/auth/types'
import img from '../../images/illustration/features.svg'
import QuizTemplatePlaceholder from './QuizTemplatePlaceholder'
import { Link } from 'react-router-dom'

type Props = {
  quiz: Quiz | undefined
  user: UserData | null
}

const QuizTemplate: React.FC<Props> = ({ quiz, user }) => {
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
      <div className={style.card}>
        {quiz && answers ? (
          <>
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
                  <Link to="/" className="btn btn-light-success font-weight-bolder font-size-h6 px-8 py-4 mr-4">
                    Go back
                  </Link>
                  <button className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4">View results</button>
                </>
              ) : (
                <button className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4">Send answers</button>
              )}
            </div>
          </>
        ) : (
          <QuizTemplatePlaceholder />
        )}
      </div>
    </div>
  )
}

export default QuizTemplate
