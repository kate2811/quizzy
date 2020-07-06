import React, { ReactNode } from 'react'
import cx from 'classnames'
import style from './Tabs.module.css'

type Props = {
  tabContent: ReactNode
}

const TabContent: React.FC<Props> = ({ tabContent }) => {
  return (
    <>
      <div className="card-body">
        <div className={cx('row', style.content)}>
          <div className="col-xl-2" />
          <div className="col-xl-7 my-2">{tabContent}</div>
        </div>
      </div>
      <div className={cx('card-footer pb-0', style.footer)}>
        <div className="row">
          <div className="col-xl-2" />
          <div className="col-xl-7 my-2">
            <button className="btn btn-success">Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabContent
