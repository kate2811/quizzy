import React, { ReactChildren } from 'react'
import logo from '../../images/logo.svg'
import cx from 'classnames'
import Notifications from '../Notifications'
import style from './PageLayout.module.css'
import MenuTop from '../MenuTop/MenuTop'

type Props = {
  signOut: () => void
  children?: ReactChildren
}

const PageLayout: React.FC<Props> = ({ children, signOut }) => {
  return (
    <div className={style.container}>
      <MenuTop />
      <div className="content d-flex flex-column flex-column-fluid mt-5" id="kt_content">
        <div className="d-flex flex-column-fluid">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout
