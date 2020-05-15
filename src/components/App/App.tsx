import React from 'react'
import './App.css'
import { Route, Router, Switch } from 'react-router-dom'
import SignInPage from '../SignInPage'
import { customHistory } from '../../history'
import { useAccessToken, useIsLoading } from '../../module/hooks'
import Loader from 'react-loader-spinner'
import Dashboard from '../Dashboard'
import Protected from "../Protected"

function App() {
  useAccessToken()
  const isLoading = useIsLoading()

  return (
    <>
      {isLoading ? (
        <Loader type="Bars" color="#157FFB" height={40} width={40} />
      ) : (
        <Router history={customHistory}>
          <Switch>
            <Route path="/" exact>
              <Protected >
                <Dashboard />
              </Protected>
            </Route>
            <Route path="/auth/sign-in">
              <SignInPage />
            </Route>
{/*            <Route path="/auth/sign-up">
              <SignUpPage />
            </Route>*/}
          </Switch>
        </Router>
      )}
    </>
  )
}

export default App

// auth one layout
