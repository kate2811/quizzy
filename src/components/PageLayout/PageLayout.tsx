import React, { ReactChildren } from 'react'
import style from './PageLayout.module.css'
import MenuTop from '../MenuTop'
import Notifications from '../Notifications'

type Props = {
  children?: ReactChildren
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.container}>
      <MenuTop />
      <Notifications className={style.notifications} />
      <div className="content d-flex flex-column flex-column-fluid mt-5" id="kt_content">
        <div className="d-flex flex-column-fluid">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout
