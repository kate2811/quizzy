import React, {useCallback} from 'react'
import style from './Dashboard.module.css'
import { UserData } from '../../module/types'
import actions from "../../module/actions"
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
