import React from 'react'
import { Quiz } from '../../modules/quiz/types'
import { UserData } from '../../modules/auth/types'
import PageLayout from '../PageLayout'
import QuizCard from '../QuizCard'
import HeaderCard from '../HeaderCard'
import QuizCardPlaceholder from '../QuizCard/QuizCardPlaceholder'
import { times } from 'lodash'
import NewQuizCard from '../QuizCard/NewQuizCard'

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
    return (
      <div className="col-lg-6 h2 d-flex align-items-center justify-content-center">
        <span>You don't have any quizzes yet</span>
      </div>
    )
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

        <div className="row">
          <NewQuizCard />
          {Content({ isQuizzesLoading, quizzes })}
        </div>
      </PageLayout>
    </>
  )
}

export default Dashboard
