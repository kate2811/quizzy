import { useSelector } from '../index'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'

export function useNotificationsUuids() {
  return useSelector((state) => state.core.notifications.map((item) => item.uuid))
}

export function useNotification(uuid: string) {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.core.notifications.find((item) => item.uuid === uuid))

  if (!notification) {
    throw new Error('notification is not found')
  }

  return {
    text: notification.text,
    type: notification.type,
    removeNotification: useCallback(() => dispatch(actions.removeNotification(uuid)), [dispatch, uuid])
  }
}
