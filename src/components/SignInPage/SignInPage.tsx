import React, { useCallback, useState } from 'react'
import style from './SignInPage.module.css'
import { useDispatch } from 'react-redux'
import { UserLogin } from '../../module/types'

type Props = {
  onSubmit: (userData: UserLogin) => void
}

const SignInPage: React.FC<Props> = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ username: '', password: '' })
  const dispatch = useDispatch()

  const onFormSubmit = useCallback((e) => {
    e.preventDefault()
    onSubmit(userData)
  }, [onSubmit, userData])

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
    <div>
      <h1>Log in to Quizzy</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="username" value={userData.username} onChange={onChange} />
        <input type="password" name="password" value={userData.password} onChange={onChange} />
        <button>Log-in</button>
      </form>
    </div>
  )
}

export default SignInPage
