import React from 'react'
import { Quiz } from '../../modules/quiz/types'
import { UserData } from '../../modules/auth/types'
import PageLayout from '../PageLayout'
import QuizCard from '../QuizCard'
import style from './Dashboard.module.css'
import HeaderCard from '../HeaderCard'
import { Link } from 'react-router-dom'
import QuizCardPlaceholder from '../QuizCard/QuizCardPlaceholder'
import { times } from 'lodash'
import icon from '../../images/icon/Selected-file.svg'

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
        <div className="row">
          <div className="col-lg-6">
            <div
              className="card mb-8 card-custom wave wave-animate-slow wave-success mb-lg-0"
              style={{ height: 132.5 }}
            >
              <div className="card-body row">
                <div className="col-sm-7">
                  <img src={icon} alt="Create new quiz" />
                  <span>Create new quiz!</span>
                </div>
                Create quiz
              </div>
            </div>
          </div>
          {Content({ isQuizzesLoading, quizzes })}
        </div>
      </PageLayout>
    </>
  )
}

export default Dashboard
