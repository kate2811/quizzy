import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserSignInData } from '../../module/types'
import AuthPageLayout from '../AuthPageLayout'
import FormInput from '../FormInput'

type Props = {
  onSubmit: (userData: UserSignInData) => void
}

const SignInPage: React.FC<Props> = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ username: '', password: '' })
  console.log(userData)

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onSubmit(userData)
    },
    [onSubmit, userData]
  )

  const onChange = useCallback(
    (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
    },
    [userData]
  )

  return (
    <AuthPageLayout title={'Sign in'}>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label={'Username'}
          name={'username'}
          onChange={onChange}
          value={userData.username}
          icon={'fa-user'}
        />
        <FormInput
          label={'Password'}
          type={'password'}
          name={'password'}
          onChange={onChange}
          value={userData.password}
          icon={'fa-lock'}
        />
        <button className="btn btn-secondary btn-block">Sign in</button>
        <p className="text-center mt-4 text-secondary">
          {`Don't have an account yet? `}
          <Link to="/auth/sign-up">Sign-up!</Link>
        </p>
      </form>
    </AuthPageLayout>
  )
}

export default SignInPage
