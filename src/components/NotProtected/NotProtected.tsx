import React from 'react'
import { UserData } from '../../modules/auth/types'
import { Redirect } from 'react-router-dom'

type Props = {
  user: UserData | null
}

const NotProtected: React.FC<Props> = ({ children, user }) => {
  return <>{!user ? children : <Redirect to={'/'} />}</>
}

export default NotProtected
