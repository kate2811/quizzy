import React, { useMemo } from 'react'
import style from './Notifications.module.css'
import cx from 'classnames'
import { useNotification } from '../../module/hooks'

type Props = {
  uuid: string
}

const NotificationItem: React.FC<Props> = ({ uuid }) => {
  const { removeNotification, text, type } = useNotification(uuid)
  const isSuccess = useMemo(() => type === 'success', [type])

  return (
    <div
      className={cx(
        style.container,
        'alert',
        'd-flex',
        'align-items-baseline',
        isSuccess ? 'alert-success' : 'alert-warning'
      )}
      role="alert"
    >
      <i className={cx('fas', 'pr-3', isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle')} />
      <button className={style.button_close} onClick={removeNotification}>
        <i className="fas fa-times" />
      </button>
      {text}
    </div>
  )
}

export default NotificationItem
