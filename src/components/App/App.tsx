import React from 'react'
import './App.css'
import SignInPage from '../SignInPage'
import {useAccessToken, useUser} from '../../module/hooks'
import Dashboard from "../Dashboard"

function App() {
  useAccessToken()
  const isUser = useUser()
  return <>{isUser ? <Dashboard /> : <SignInPage />}</>
}

export default App
