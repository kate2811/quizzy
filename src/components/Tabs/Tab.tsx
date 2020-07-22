import React from 'react'
import cx from 'classnames'
import style from './Tabs.module.css'

type Props = {
  title: string
  icon: string
  isSwitched?: boolean
}

const Tab: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="card-body">
        <div className={cx('row', style.content)}>
          <div className="col-xl-2" />
          <div className="col-xl-7 my-2">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Tab
