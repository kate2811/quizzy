import { useSelector } from '../store'
import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import actions from './actions'

export function useUser() {
  return useSelector((state) => state.user)
}

export function useIsLoading() {
  return useSelector((state) => state.isLoading)
}

export function useQuizzes() {
  return useSelector((state) => state.quizzes)
}

export function usePublishQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz) => {
      return dispatch(actions.publishQuiz(quiz))
    },
    [dispatch]
  )
}

export function useSignInRequest() {
  const dispatch = useDispatch()
  return useCallback(
    (userData) => {
      return dispatch(actions.signInRequest(userData))
    },
    [dispatch]
  )
}

export function useSignUpRequest() {
  const dispatch = useDispatch()
  return useCallback(
    (userSignUpData) => {
      return dispatch(actions.signUpRequest(userSignUpData))
    },
    [dispatch]
  )
}

export function useSignOutUser() {
  const dispatch = useDispatch()
  return useCallback(() => {
    return dispatch(actions.signOutUser())
  }, [dispatch])
}

export function useAccessToken() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      dispatch(actions.loadUser())
      dispatch(actions.getUser(token))
    }
  }, [dispatch])
}
