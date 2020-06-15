import React, { useMemo } from 'react'
import style from './Notifications.module.css'
import cx from 'classnames'
import { useNotification } from '../../modules/core/hooks'

type Props = {
  uuid: string
}

const NotificationItem: React.FC<Props> = ({ uuid }) => {
  const { removeNotification, text, type } = useNotification(uuid)
  const isSuccess = useMemo(() => type === 'success', [type])

  return (
    <div
      className={cx(
        'alert',
        'd-flex',
        'align-items-baseline',
        style.notification,
        isSuccess ? 'alert-success' : 'alert-danger'
      )}
      role="alert"
    >
      <i className={cx('fas', 'pr-3', isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle')} />
      {text}
      <button className={cx('pl-3', style.button_close)} onClick={removeNotification}>
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default NotificationItem
