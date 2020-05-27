import React from 'react'
import SignUnPage from './SignUpPage'
import { useSignUpRequest } from '../../module/auth/hooks'

export default function () {
  const onSubmit = useSignUpRequest()
  return <SignUnPage onSubmit={onSubmit} />
}
