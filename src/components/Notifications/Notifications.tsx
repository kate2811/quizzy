import React from 'react'
import { useNotifications } from '../../module/hooks'
import NotificationItem from './NotificationItem'

const Notifications: React.FC = () => {
  const notifications = useNotifications()
  return (
    <div>
      {notifications.map((item, index) => (
        <NotificationItem key={index} />
      ))}
    </div>
  )
}

export default Notifications
