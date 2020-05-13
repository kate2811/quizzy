import React from 'react'
import './App.css'
import SignInPage from '../SignInPage'
import { useAccessToken, useIsLoading, useUser } from '../../module/hooks'
import Loader from 'react-loader-spinner'
import Dashboard from '../Dashboard'
import PageLayout from "../PageLayout"

function App() {
  useAccessToken()
  const isUser = useUser()
  const isLoading = useIsLoading()

  if(isUser) {
    return <Dashboard />
  }
  if(isLoading) {
    return <Loader type="Bars" color="#157FFB" height={40} width={40} />
  }
  return  <SignInPage />
}

export default App
