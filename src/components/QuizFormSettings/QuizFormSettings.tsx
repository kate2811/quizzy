import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  onDelete: (uuid: string) => void
  quizUuid: string
}

const QuizFormSettings: React.FC<Props> = ({ onDelete, quizUuid }) => {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = useCallback(() => {
    setIsChecked(!isChecked)
    !isChecked && onDelete(quizUuid)
  }, [isChecked, setIsChecked, onDelete, quizUuid])

  return (
    <div className="d-flex flex-column">
      <span className="switch switch-success">
        <label>
          Archive it
          <input type="checkbox" checked={isChecked} onChange={onChange} name="select" />
          <span />
        </label>
      </span>
      <span>
        {`You can find your archived quizzes... `}
        <Link to="/archive" className="text-success">
          Here!
        </Link>
      </span>
    </div>
  )
}

export default QuizFormSettings
