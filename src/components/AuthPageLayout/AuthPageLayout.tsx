import React from 'react'
import style from './AuthPageLayout.module.css'

const AuthPageLayout: React.FC<{title: string}> = ({ children, title }) => {
  return (
    <div className={style.container}>
      <div className={style.logo}></div>
      <div className={style.content}>
        <h1 className='text-center h3 mb-4'>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default AuthPageLayout
