import React from 'react'
import SignInPage from './SignInPage'
import { useLoginRequest } from '../../module/hooks'

export default function() {
  const onSubmit = useLoginRequest()
  return <SignInPage onSubmit={onSubmit} />
}

