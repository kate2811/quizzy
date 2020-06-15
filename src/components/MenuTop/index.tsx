import React from 'react'
import { useSignOutUser } from '../../modules/auth/hooks'
import MenuTop from './MenuTop'

export default function () {
  const signOut = useSignOutUser()

  return <MenuTop signOut={signOut} />
}
