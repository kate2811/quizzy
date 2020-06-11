import React from 'react'
import { Quiz } from '../../module/quiz/types'
import { UserData } from '../../module/auth/types'
import PageLayout from '../PageLayout'
import QuizCard from '../QuizCard'
import style from './Dashboard.module.css'
import HeaderCard from '../HeaderCard'
import { Link } from 'react-router-dom'
import QuizCardPlaceholder from '../QuizCard/QuizCardPlaceholder'
import { times } from 'lodash'

type Props = {
  user: null | UserData
  quizzes: Quiz[]
  isQuizzesLoading: boolean
}

function Content({ isQuizzesLoading, quizzes }: { isQuizzesLoading: boolean; quizzes: Quiz[] }) {
  if (isQuizzesLoading) {
    return times(6, (index) => <QuizCardPlaceholder key={index} />)
  }
  if (quizzes.length === 0) {
    return <div>You don't have any quizzes yet</div>
  }

  return quizzes.map((item, index) => (
    <QuizCard key={index} title={item.title} description={item.description} uuid={item.uuid} />
  ))
}

const Dashboard: React.FC<Props> = ({ user, quizzes, isQuizzesLoading }) => {
  const userName = user && user.firstName ? user.firstName : 'Guest'

  return (
    <>
      <PageLayout>
        <HeaderCard title={`Hello, ${userName}. Your quizzes are here`} />

        <Link to="/create" className={style.link}>
          <button className="btn btn-primary" />
        </Link>
        <div className="row">{Content({ isQuizzesLoading, quizzes })}</div>
      </PageLayout>
    </>
  )
}

export default Dashboard
