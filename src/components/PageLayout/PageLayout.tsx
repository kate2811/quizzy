import React, {ReactChildren} from 'react'
import cx from 'classnames'

type Props = {
  signOut: () => void
  children?: ReactChildren
}

const PageLayout: React.FC<Props> = ({ children, signOut }) => {
  return (
    <div>
      <nav className={cx('navbar', 'bg-warning', 'justify-content-between')}>
        <span className={cx('navbar-brand', 'mb-0', 'h1')}>Quizzy</span>
        <button className="btn btn-light" onClick={signOut}>Sign out</button>
      </nav>
      {children}
    </div>
  )
}

export default PageLayout
