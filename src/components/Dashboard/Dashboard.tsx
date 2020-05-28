import React from 'react'
import { Quiz } from '../../module/quiz/types'
import { UserData } from '../../module/auth/types'
import PageLayout from '../PageLayout'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'

type Props = {
  user: null | UserData
  quizzes: Quiz[]
  isQuizzesLoading: boolean
}

const Dashboard: React.FC<Props> = ({ user, quizzes, isQuizzesLoading }) => {
  const userName = user && user.firstName ? user.firstName : 'Guest'

  return (
    <>
      <PageLayout>
        <h1 className="text-center">{`Hello, ${userName}. Create your quiz`}</h1>

        {isQuizzesLoading ? (
          <Loader type="Bars" color="#157FFB" height={40} width={40} />
        ) : quizzes.length === 0 ? (
          <>
            <div>You don't have any quizzes yet</div>
            <Link to="/create" className="btn btn-warning">
              Create it!
            </Link>
          </>
        ) : (
          <div>
            <ul>
              {quizzes.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
            <Link to="/create" className="btn btn-warning">
              Create new quiz!
            </Link>
          </div>
        )}
      </PageLayout>
    </>
  )
}

export default Dashboard
