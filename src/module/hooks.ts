import { useSelector } from '../store'
import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import actions from './actions'

export function useUser() {
  return useSelector((state) => state.user)
}

export function useAccessToken() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('accessToken') as string)
    if (token) {
      dispatch(actions.getUser(token))
    }
  }, [])
}
