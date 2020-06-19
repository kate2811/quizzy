import React, { ReactNode } from 'react'
import cx from 'classnames'
import style from './Tabs.module.css'

type Props = {
  tabContent: ReactNode
}

const TabContent: React.FC<Props> = ({ tabContent }) => {
  return (
    <div className="card-body px-0">
      <div className={cx('form-group row', style.content)}>{tabContent}</div>
    </div>
  )
}

export default TabContent
