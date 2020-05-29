import React from 'react'
import { useNotificationsUuids } from '../../module/core/hooks'
import NotificationItem from './NotificationItem'

const Notifications: React.FC<{ className: string }> = ({ className }) => {
  const notificationsUuids = useNotificationsUuids()
  return (
    <div className={className}>
      {notificationsUuids.map((item, index) => (
        <NotificationItem key={index} uuid={item} />
      ))}
    </div>
  )
}

export default Notifications
