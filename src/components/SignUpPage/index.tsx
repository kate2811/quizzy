import React from 'react'
import SignUnPage from './SignUpPage'
import { useSignUpRequest} from "../../module/hooks"

export default function() {
  const onSubmit = useSignUpRequest()
  return <SignUnPage onSubmit={onSubmit} />
}
