import { useSelector } from '../store'
import { useDispatch } from 'react-redux'
import {useCallback, useEffect} from 'react'
import actions from './actions'

export function useUser() {
  return useSelector((state) => state.user)
}

export function useIsLoading() {
  return useSelector((state) => state.isLoading)
}

export function useLoginRequest() {
  const dispatch = useDispatch()
  return useCallback((userData) => {
    return dispatch(actions.loginRequest(userData))
  }, [dispatch])
}

export function useLogoutUser() {
  const dispatch = useDispatch()
  return useCallback(() => {
    return dispatch(actions.logoutUser())
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
