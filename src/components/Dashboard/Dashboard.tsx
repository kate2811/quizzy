import React from 'react'
import { Quiz } from '../../module/quiz/types'
import { UserData } from '../../module/auth/types'
import PageLayout from '../PageLayout'
import QuizCard from '../QuizCard'
import style from './Dashboard.module.css'
import HeaderCard from '../HeaderCard'

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
        <HeaderCard title={`Hello, ${userName}. Your quizzes are here`} />

        {/*        <Link to="/create" className={style.link}>
          <QuizCard className={style.card_createNew} title="Create new quiz!" description="It's fast and easy!" />
        </Link>*/}

        {isQuizzesLoading ? (
          cardsPlaceholder.map((item, index) => <QuizCard key={index} className={style.card} />)
        ) : quizzes.length === 0 ? (
          <div>You don't have any quizzes yet</div>
        ) : (
          <div className="row">
            <QuizCard title="Create a quiz!" description="It's fast and easy!" />
            {quizzes.map((item, index) => (
              <QuizCard key={index} title={item.title} description={item.description} />
            ))}
          </div>
        )}
      </PageLayout>
    </>
  )
}

export default Dashboard
