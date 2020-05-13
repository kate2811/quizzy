import React from 'react'
import cx from 'classnames'

const PageLayout: React.FC = ({ children }) => {
  return (
    <div>
      <nav className={cx('navbar', 'bg-warning', 'justify-content-start')}>
        <span className={cx('navbar-brand', 'mb-0', 'h1')}>Quizzy</span>
        <div className="navbar-nav">Home</div>
      </nav>
      {children}
    </div>
  )
}

export default PageLayout
