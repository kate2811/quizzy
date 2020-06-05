import React from 'react'

const MenuTop: React.FC = () => {
  return (
    <div className="d-flex justify-content-between p-6 bg-white">
      <button className="btn btn-success font-weight-bold mr-2 btn-lg">Menu</button>
      <button className="btn btn-light-success font-weight-bold mr-2 btn-lg">Log out</button>
    </div>
  )
}

export default MenuTop
