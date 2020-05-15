import React from 'react'
import style from './AuthPageLayout.module.css'

const AuthPageLayout: React.FC = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className='text-center h3 mb-4'>Log in to Quizzy</h1>
        {children}
      </div>
    </div>
  )
}

export default AuthPageLayout
