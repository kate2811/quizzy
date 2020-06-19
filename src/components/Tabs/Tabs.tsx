import React, { ReactNode, useState } from 'react'
import Tab from './Tab'
import TabContent from './TabContent'

type Props = {
  tabsContent: { title: string; icon: string; content: ReactNode }[]
}

const Tabs: React.FC<Props> = ({ tabsContent }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="card card-custom">
      <div className="card-header card-header-tabs-line nav-tabs-line-3x">
        <ul className="nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-3x">
          {tabsContent.map((item, index) => (
            <Tab
              key={index}
              title={item.title}
              icon={item.icon}
              index={index}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
      </div>

      <TabContent tabContent={tabsContent[selectedTab].content} />
    </div>
  )
}

export default Tabs
