import React from 'react'
import { UserData } from '../../module/types'
import PageLayout from "../PageLayout"

type Props = {
  user: null | UserData
}

const Dashboard: React.FC<Props> = ({ user }) => {
  const userName = user && user.username ? user.username : 'Guest'

  return (
    <>
      <PageLayout>
        <h1 className="text-center">{`Hello, ${userName}. Create your quiz`}</h1>
      </PageLayout>
    </>
  )
}

export default Dashboard
