import React, { useCallback, useState } from 'react'
import AuthPageLayout from '../AuthPageLayout'
import FormInput from '../FormInput'
import { Link } from 'react-router-dom'
import { UserSingUpData } from '../../module/types'

type Props = { onSubmit: (userData: UserSingUpData) => void }

const SignUpPage: React.FC<Props> = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ email: '', username: '', password: '' })

  const onChange = useCallback(
    (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
    },
    [userData]
  )

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onSubmit(userData)
    },
    [onSubmit, userData]
  )

  return (
    <AuthPageLayout title={'Sign up'}>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label={'Email'}
          name={'email'}
          type={'email'}
          onChange={onChange}
          value={userData.email}
          icon={'fa-envelope'}
        />
        <FormInput
          label={'Username'}
          name={'username'}
          onChange={onChange}
          value={userData.username}
          icon={'fa-user'}
        />
        <FormInput
          label={'Password'}
          name={'password'}
          type={'password'}
          onChange={onChange}
          value={userData.password}
          icon={'fa-lock'}
        />
        <button className="btn btn-secondary btn-block">Sign up</button>
        <p className="text-center mt-4 text-secondary">
          {`Already have an account? `}
          <Link to="/auth/sign-in">Sign-in!</Link>
        </p>
      </form>
    </AuthPageLayout>
  )
}

export default SignUpPage
