import React from 'react'
import { useUser } from '../../modules/auth/hooks'
import Protected from './Protected'

export default function ({ children }: any) {
  const user = useUser()

  return <Protected user={user} children={children} />
}
