import React from 'react'
import style from './AuthPageLayout.module.css'
import logo from '../../images/logo.png'

const AuthPageLayout: React.FC<{title: string}> = ({ children, title }) => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} className={style.logoImg} alt='quizzy_logo' />
      </div>
      <div className={style.content}>
        <h1 className='text-center h3 mb-4'>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default AuthPageLayout
