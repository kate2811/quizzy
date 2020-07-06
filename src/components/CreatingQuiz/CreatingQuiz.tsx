import React, { useCallback, useState } from 'react'
import PageLayout from '../PageLayout'
import Tabs from '../Tabs'
import QuizFormGeneral from './QuizFormGeneral'
import { Quiz, UpdatedQuizQuestion } from '../../modules/quiz/types'

type Props = {
  editedQuiz: any
  onEditQuiz: (quizData: Omit<Quiz, 'questions'>) => void
  onAddQuestion: (newQuestion: UpdatedQuizQuestion) => void
  onEditQuestion: (question: UpdatedQuizQuestion) => void
  onDeleteQuestion: (question: UpdatedQuizQuestion) => void
  onDelete: any
}

const CreatingQuiz: React.FC<Props> = ({
  editedQuiz,
  onEditQuiz,
  onDelete,
  onAddQuestion,
  onEditQuestion,
  onDeleteQuestion
}) => {
  const [quiz, setQuiz] = useState({ description: editedQuiz.description, title: editedQuiz?.title })
  const onQuizChange = useCallback(
    (e) => {
      setQuiz({ ...quiz, [e.target.name]: e.target.value })
    },
    [setQuiz, quiz]
  )

  const content = [
    {
      title: 'General',
      icon: 'fa-info-circle',
      content: <QuizFormGeneral quiz={quiz} onChange={onQuizChange} onEdit={onEditQuiz} editedQuiz={editedQuiz} />
    },
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
