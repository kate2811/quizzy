import React from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

type Props = {
  signOut: () => void
}

const MenuTop: React.FC<Props> = ({ signOut }) => {
  return (
    <div className="d-flex justify-content-between p-6 bg-white">
      <Link to="/">
        <img src={logo} height={50} alt="quizzy-logo" />
      </Link>
      <div>
        <button className="btn btn-success font-weight-bold mr-2 btn-lg">Menu</button>
        <button className="btn btn-light-success font-weight-bold mr-2 btn-lg" onClick={signOut}>
          Log out
        </button>
      </div>
    </div>
  )
}

export default MenuTop
