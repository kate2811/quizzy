import React from 'react'
import { useNotifications } from '../../module/hooks'
import NotificationItem from './NotificationItem'

const Notifications: React.FC<{ className: string }> = ({ className }) => {
  const notificationsUuids = useNotifications()
  return (
    <div className={className}>
      {notificationsUuids.map((item, index) => (
        <NotificationItem key={index} uuid={item} />
      ))}
    </div>
  )
}

export default Notifications
