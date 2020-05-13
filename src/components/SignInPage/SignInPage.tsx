import React, { useCallback, useState } from 'react'
import style from './SignInPage.module.css'
import { useDispatch } from 'react-redux'
import actions from '../../module/actions'
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

  function onClick(e: any) {
    e.preventDefault()
    dispatch(
      actions.getUser(
        'eyJhbGciOzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlhIiwic3ViIjozLCJpYXQiOjE1ODkyOTI4MzksImV4cCI6MTU4OTM3OTIzOX0.KMiyhXM_jcSkBwkOWo35QIdTpVXQ61yf8E5IHHhP_aI'
      )
    )
  }

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
      <button onClick={onClick}>have token already</button>
    </div>
  )
}

export default SignInPage
