import React, {useCallback} from 'react'
import style from './Dashboard.module.css'
import { UserData } from '../../module/types'
import actions from "../../module/actions"
import PageLayout from "../PageLayout"

type Props = {
  user: null | UserData
  logout: () => void
}

const Dashboard: React.FC<Props> = ({ user, logout }) => {
  const userName = user && user.username ? user.username : 'Guest'

  const onClick = useCallback((e) => {
    e.preventDefault()
    logout()
  }, [logout])

  return (
    <>
      <PageLayout>
        <h1 className="text-center">{`Hello, ${userName}. Create your quiz`}</h1>
        <button onClick={onClick}>Logout</button>
      </PageLayout>
    </>
  )
}

export default Dashboard
