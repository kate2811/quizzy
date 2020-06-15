import React, { useMemo } from 'react'
import cx from 'classnames'
import { useNotification } from '../../modules/core/hooks'

type Props = {
  uuid: string
}

const NotificationItem: React.FC<Props> = ({ uuid }) => {
  const { removeNotification, text, type } = useNotification(uuid)
  const isSuccess = useMemo(() => type === 'success', [type])

  return (
    <div className={cx('alert alert-custom fade show', isSuccess ? 'alert-success' : 'alert-danger')} role="alert">
      <div className="alert-icon">
        <i className={cx('fas', isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle')} />
      </div>
      <div className="alert-text">{text}</div>

      <div className="alert-close">
        <button type="button" className="close" onClick={removeNotification}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  )
}

export default NotificationItem
