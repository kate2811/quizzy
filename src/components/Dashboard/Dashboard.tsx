import React from 'react'
import { Quiz, UserData } from '../../module/types'
import PageLayout from '../PageLayout'
import {Link} from "react-router-dom"

type Props = {
  user: null | UserData
  quizzes: Quiz[]
}

const Dashboard: React.FC<Props> = ({ user, quizzes }) => {
  const userName = user && user.username ? user.username : 'Guest'

  return (
    <>
      <PageLayout>
        <h1 className="text-center">{`Hello, ${userName}. Create your quiz`}</h1>
        {quizzes.length === 0 ? (
          <>
            <div>You don't have any quizzes yet</div>
            <Link to='/create' className='btn btn-warning'>Create it!</Link>
          </>
        ) : (
          <div>
            <ul>
              {quizzes.map((item) => (
                <li>{item.title}</li>
              ))}
            </ul>
            <Link to='/create' className='btn btn-warning'>Create new quiz!</Link>
          </div>
        )}
      </PageLayout>
    </>
  )
}

export default Dashboard
