import React from 'react'
import { useLogoutUser } from '../../module/hooks'
import PageLayout from "./PageLayout"

export default function ({ children }: {children: any}) {
  const logout = useLogoutUser()

  return <PageLayout logout={logout} children={children} />
}
