import React, { ReactElement, useCallback, useState } from 'react'
import TabTitle from './TabTitle'
import style from './Tabs.module.css'
import { Link } from 'react-router-dom'

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

      <div className={style.footer}>
        {selectedTab < children.length - 1 ? (
          <button
            className="btn btn-light-success"
            onClick={onNextTab}
            disabled={children[selectedTab].props.isSwitched || false}
          >
            Next
          </button>
        ) : (
          <Link to="/" className="btn btn-success">
            Done
          </Link>
        )}
        {selectedTab > 0 && (
          <button className="btn btn-light-success" onClick={onPreviousTab}>
            Previous
          </button>
        )}
      </div>
    </div>
  )
}

export default Tabs
