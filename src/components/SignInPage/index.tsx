import React from 'react'
import SignInPage from './SignInPage'
import { useSignInRequest } from '../../modules/auth/hooks'

export default function () {
  const onSubmit = useSignInRequest()
  return <SignInPage onSubmit={onSubmit} />
}
