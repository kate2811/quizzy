import React from 'react'
import Dashboard from './Dashboard'
import { useLogoutUser, useUser } from '../../module/hooks'

export default function () {
  const user = useUser()
  const logout = useLogoutUser()

  return <Dashboard user={user} logout={logout} />
}
