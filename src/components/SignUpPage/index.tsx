import React from 'react'
import SignUnPage from './SignUpPage'
import { useSignUpRequest } from '../../modules/auth/hooks'

export default function () {
  const onSubmit = useSignUpRequest()
  return <SignUnPage onSubmit={onSubmit} />
}
