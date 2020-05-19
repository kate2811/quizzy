import React, {ReactChildren} from 'react'
import logo from '../../images/logo.png'
import cx from 'classnames'

type Props = {
  signOut: () => void
  children?: ReactChildren
}

const PageLayout: React.FC<Props> = ({ children, signOut }) => {
  return (
    <div>
      <nav className={cx('navbar', 'bg-warning', 'justify-content-between')}>
        <img src={logo} height={30} alt='quizzy_logo'/>
        <button className="btn btn-light" onClick={signOut}>Sign out</button>
      </nav>
      {children}
    </div>
  )
}

export default PageLayout
