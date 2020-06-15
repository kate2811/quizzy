import React from 'react'
import './App.css'
import { Route, Router, Switch } from 'react-router-dom'
import SignInPage from '../SignInPage'
import { customHistory } from '../../history'
import { useAccessToken, useIsLoading } from '../../modules/auth/hooks'
import Loader from 'react-loader-spinner'
import Dashboard from '../Dashboard'
import Protected from '../Protected'
import SignUpPage from '../SignUpPage'
import CreateQuiz from '../CreateQuiz'
import QuizTemplate from '../QuizTemplate'

function App() {
  useAccessToken()
  const isLoading = useIsLoading()

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center min-vh-100 align-items-center">
          <Loader type="Bars" color="#ffd569" height={50} width={50} />
        </div>
      ) : (
        <Router history={customHistory}>
          <Switch>
            <Route path="/" exact>
              <Protected>
                <Dashboard />
              </Protected>
            </Route>
            <Route path="/create" exact>
              <Protected>
                <CreateQuiz />
              </Protected>
            </Route>
            <Route path="/quiz/:uuid">
              <QuizTemplate />
            </Route>
            <Route path="/auth/sign-in">
              <SignInPage />
            </Route>
            <Route path="/auth/sign-up">
              <SignUpPage />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  )
}

export default App

// auth one layout
