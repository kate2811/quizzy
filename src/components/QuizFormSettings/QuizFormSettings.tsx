import React, { useCallback, useState } from 'react'

type Props = {
  onDelete: (uuid: string) => void
  quizUuid: string
}

const QuizFormSettings: React.FC<Props> = ({ onDelete, quizUuid }) => {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = useCallback(() => {
    setIsChecked(!isChecked)
    !isChecked && onDelete(quizUuid)
  }, [isChecked, setIsChecked, onDelete, isChecked])

  return (
    <span className="switch switch-success">
      <label>
        Add quiz to archive
        <input type="checkbox" checked={isChecked} onChange={onChange} name="select" />
        <span />
      </label>
    </span>
  )
}

export default QuizFormSettings
