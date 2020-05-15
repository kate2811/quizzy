import React from 'react'
import { UserData } from '../../module/types'
import { Redirect } from 'react-router-dom'

type Props = {
  user: UserData | null
}

const Protected: React.FC<Props> = ({ children, user }) => {
  return <>{user ? children : <Redirect to={'/auth/sign-in'} />}</>
}

export default Protected
