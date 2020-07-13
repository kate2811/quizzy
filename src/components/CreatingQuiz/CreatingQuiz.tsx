import React from 'react'
import PageLayout from '../PageLayout'
import Tabs from '../Tabs'
import QuizFormGeneral from '../QuizFormGeneral'
import QuizFormQuestions from '../QuizFormQuestions.tsx'
import { Quiz } from '../../modules/quiz/types'

const CreatingQuiz: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const content = [
    {
      title: 'General',
      icon: 'fa-info-circle',
      content: <QuizFormGeneral quiz={quiz} />
    },
    {
      title: 'Questions',
      icon: 'fa-file-alt',
      content: <QuizFormQuestions quiz={quiz} />
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
