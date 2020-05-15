import React from 'react'
import SignInPage from './SignInPage'
import { useSignInRequest } from '../../module/hooks'

export default function() {
  const onSubmit = useSignInRequest()
  return <SignInPage onSubmit={onSubmit} />
}

