import React, { useCallback } from 'react'
import cx from 'classnames'
import style from './Tabs.module.css'

type Props = {
  title: string
  icon: string
  index: number
  selectedTab: number
  setSelectedTab: (index: number) => void
}

const Tab: React.FC<Props> = ({ title, selectedTab, setSelectedTab, index, icon }) => {
  const isSelected = selectedTab === index

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li className="nav-item mr-3">
      <button className={cx('nav-link', style.tab, isSelected && 'active')} onClick={onClick}>
        <span className={cx('nav-icon', style.tab, isSelected && 'active')}>
          <i className={cx('fas', icon)} />
        </span>
        <span className="nav-text font-size-lg">{title}</span>
      </button>
    </li>
  )
}

export default Tab
