import React from 'react'
import CreateQuiz from './CreateQuiz'
import { usePublishQuiz } from '../../module/hooks'

export default function () {
  const onSubmit = usePublishQuiz()
  return <CreateQuiz onSubmit={onSubmit} />
}
