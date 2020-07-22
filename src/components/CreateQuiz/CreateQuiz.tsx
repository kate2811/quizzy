import React from 'react'
import PageLayout from '../PageLayout'
import QuizFormGeneral from '../QuizFormGeneral'
import QuizFormQuestions from '../QuizFormQuestions.tsx'
import { Quiz } from '../../modules/quiz/types'
import QuizFormSettings from '../QuizFormSettings'
import Tab from '../Tabs/Tab'
import Tabs from '../Tabs'

const CreateQuiz: React.FC<{ quiz?: Quiz }> = ({ quiz }) => {
  return (
    <PageLayout>
      <Tabs>
        <Tab title="General" icon="fa-info-circle" isSwitched={!quiz}>
          <QuizFormGeneral quiz={quiz} />
        </Tab>
        <Tab title="Questions" icon="fa-file-alt">
          <QuizFormQuestions quiz={quiz} />
        </Tab>
        <Tab title="Settings" icon="fa-search">
          <QuizFormSettings quiz={quiz} />
        </Tab>
      </Tabs>
    </PageLayout>
  )
}

export default CreateQuiz
