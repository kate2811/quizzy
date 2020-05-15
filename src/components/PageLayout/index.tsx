import React from 'react'
import { useSignOutUser } from '../../module/hooks'
import PageLayout from "./PageLayout"

export default function ({ children }: {children: any}) {
  const signOut = useSignOutUser()

  return <PageLayout signOut={signOut} children={children} />
}
