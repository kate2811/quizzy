import React, { ReactChildren } from 'react'
import logo from '../../images/logo.svg'
import cx from 'classnames'
import Notifications from '../Notifications'
import style from './PageLayout.module.css'

type Props = {
  signOut: () => void
  children?: ReactChildren
}

const PageLayout: React.FC<Props> = ({ children, signOut }) => {
  return (
    <div className={style.container}>
      <nav className={cx('navbar', 'justify-content-between', style.header)}>
        <img src={logo} height={40} alt="quizzy_logo" />
        <Notifications className={style.notifications} />
        <button className="btn btn-light" onClick={signOut}>
          Sign out
        </button>
      </nav>
      {children}
    </div>
  )
}

export default PageLayout
