import React from 'react'

const NotificationItem: React.FC = () => {
  return (
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="...">
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </img>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
      <div className="toast-body">Hello, world! This is a toast message.</div>
    </div>
  )
}

export default NotificationItem
