import React, { useCallback, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { Link } from 'react-router-dom'
import cx from 'classnames'

type Props = {
  menuItems: { title: string; to: string }[]
}

const Dropdown: React.FC<Props> = ({ menuItems }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const ref = useRef(null)
  useClickAway(ref, () => {
    setModalOpen(false)
  })

  const onClick = useCallback(() => {
    setModalOpen(!isModalOpen)
  }, [setModalOpen, isModalOpen])

  return (
    <div className={cx('dropdown', isModalOpen && 'show')} ref={ref}>
      <button
        className="btn btn-success btn-lg text-uppercase dropdown-toggle font-weight-bold"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isModalOpen}
        onClick={onClick}
      >
        Actions
      </button>
      <div className={cx('dropdown-menu', isModalOpen && 'show')} aria-labelledby="dropdownMenuButton">
        {menuItems.map((item, index) => (
          <Link key={index} className="dropdown-item" to={item.to}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
