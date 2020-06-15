import React from 'react'
import { useUser } from '../../modules/auth/hooks'
import NotProtected from './NotProtected'

export default function ({ children }: any) {
  const user = useUser()

  return <NotProtected user={user} children={children} />
}
