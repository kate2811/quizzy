import React from 'react'
import PageLayout from '../PageLayout'
import Tabs from '../Tabs'

const CreatingQuiz: React.FC = () => {
  const content = [
    { title: 'General', icon: 'fa-info-circle', content: <div>hhhh</div> },
    { title: 'Questions', icon: 'fa-file-alt', content: <div>qqq</div> },
    { title: 'Settings', icon: 'fa-search', content: <div>sss</div> }
  ]

  return (
    <PageLayout>
      <Tabs tabsContent={content}></Tabs>
    </PageLayout>
  )
}

export default CreatingQuiz
