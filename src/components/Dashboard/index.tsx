import React from 'react'
import Dashboard from './Dashboard'
import {useUser} from '../../module/hooks'

export default function () {
  const user = useUser()

  return <Dashboard user={user} />
}
