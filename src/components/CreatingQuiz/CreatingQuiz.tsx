import React from 'react'
import PageLayout from '../PageLayout'
import Tabs from '../Tabs'
import QuizFormGeneral from '../QuizFormGeneral'

const CreatingQuiz: React.FC = () => {
  const content = [
    {
      title: 'General',
      icon: 'fa-info-circle',
      content: <QuizFormGeneral />
    },
    {
      title: 'Questions',
      icon: 'fa-file-alt',
      content: <div />
    },
    { title: 'Settings', icon: 'fa-search', content: <div>sss</div> }
  ]

  return (
    <PageLayout>
      <Tabs tabsContent={content}></Tabs>
    </PageLayout>
  )
}

export default CreatingQuiz
