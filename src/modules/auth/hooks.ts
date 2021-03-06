import { useSelector } from '../index'
import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { actions } from './actions'

export function useUser() {
  return useSelector((state) => state.auth.user)
}

export function useIsLoading() {
  return useSelector((state) => state.auth.isLoading)
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

export function useAccessToken() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      dispatch(actions.loadUser())
      dispatch(actions.getUser())
    }
  }, [dispatch])
}

export function useSignOutUser() {
  const dispatch = useDispatch()
  return useCallback(() => {
    return dispatch(actions.signOutUser())
  }, [dispatch])
}
