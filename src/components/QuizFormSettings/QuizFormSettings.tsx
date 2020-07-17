import React, { useCallback } from 'react'

type Props = {
  onDelete: (uuid: string) => void
  quizUuid: string
}

const QuizFormSettings: React.FC<Props> = ({ onDelete, quizUuid }) => {
  const onClick = useCallback(() => onDelete(quizUuid), [onDelete, quizUuid])

  return (
    <button onClick={onClick} className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">
      Delete
    </button>
  )
}

export default QuizFormSettings
