import React, { ReactElement, useCallback, useState } from 'react'
import TabTitle from './TabTitle'
import cx from 'classnames'
import style from './Tabs.module.css'

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const onNextTab = useCallback(() => {
    setSelectedTab(() => selectedTab + 1)
  }, [setSelectedTab, selectedTab])

  const onPreviousTab = useCallback(() => {
    setSelectedTab(() => selectedTab - 1)
  }, [setSelectedTab, selectedTab])

  return (
    <div className="card card-custom">
      <div className="card-header card-header-tabs-line nav-tabs-line-3x">
        <ul className="nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-3x">
          {children.map((item, index) => (
            <TabTitle
              key={index}
              title={item.props.title}
              icon={item.props.icon}
              index={index}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              isDisabled={children[selectedTab].props.isSwitched || false}
            />
          ))}
        </ul>
      </div>

      {children[selectedTab]}

      <div className={cx('card-footer pb-0', style.footer)}>
        <div className="row">
          <div className="col-xl-2" />
          <div className="col-xl-7 my-2">
            {selectedTab > 0 && (
              <button className="btn btn-light-success" onClick={onPreviousTab}>
                Previous
              </button>
            )}
            {selectedTab < children.length - 1 && (
              <button
                className="btn btn-light-success"
                onClick={onNextTab}
                disabled={children[selectedTab].props.isSwitched || false}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
