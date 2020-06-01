import React from 'react'
import { Quiz } from '../../module/quiz/types'
import { UserData } from '../../module/auth/types'
import PageLayout from '../PageLayout'
import { Link } from 'react-router-dom'
import QuizCard from '../QuizCard'
import style from './Dashboard.module.css'

type Props = {
  user: null | UserData
  quizzes: Quiz[]
  isQuizzesLoading: boolean
}

const cardsPlaceholder = ['', '', '']

const Dashboard: React.FC<Props> = ({ user, quizzes, isQuizzesLoading }) => {
  const userName = user && user.firstName ? user.firstName : 'Guest'

  return (
    <>
      <PageLayout>
        <div className={style.container}>
          <h1 className="text-center">Hello, {userName}. Your quizzes are here</h1>

          <Link to="/create" className={style.link}>
            <QuizCard className={style.card_createNew} title="Create new quiz!" description="It's fast and easy!" />
          </Link>

          {isQuizzesLoading ? (
            cardsPlaceholder.map((item, index) => <QuizCard key={index} className={style.card} />)
          ) : quizzes.length === 0 ? (
            <div>You don't have any quizzes yet</div>
          ) : (
            <div className={style.quizzes__container}>
              {quizzes.map((item, index) => (
                <QuizCard key={index} title={item.title} description={item.description} className={style.card} />
              ))}
            </div>
          )}
        </div>
      </PageLayout>
    </>
  )
}

export default Dashboard
