import React, {useCallback} from 'react'
import style from './Dashboard.module.css'
import { UserData } from '../../module/types'
import actions from "../../module/actions"

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
    <div>
      <h1>{`Hello, ${userName}. Create your quiz`}</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  )
}

export default Dashboard
