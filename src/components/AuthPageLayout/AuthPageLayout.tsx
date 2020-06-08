import React from 'react'
import style from './AuthPageLayout.module.css'
import logo from '../../images/logo.svg'
import login from '../../images/illustration/login-visual-5.svg'
import Notifications from '../Notifications'
import cx from 'classnames'

const AuthPageLayout: React.FC = ({ children }) => {
  return (
    <div className="d-flex min-vh-100 min-vw-100 position-relative">
      <Notifications className={style.notifications} />

      <div className={style.container_logo}>
        <div className="d-flex flex-column">
          <img src={logo} height={100} alt="quizzy-logo" />
          <p className={style.text_logo}>Create and share your quiz for free!</p>
        </div>
        <img src={login} height={400} alt="login-page" />
      </div>

      <div
        className={cx(
          'login-content flex-row-fluid d-flex flex-column justify-content-center position-relative',
          'overflow-hidden p-7 mx-auto',
          style.container_form
        )}
      >
        <div className="d-flex flex-column-fluid flex-center">
          <div className={cx('login-form', style.form)}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AuthPageLayout
