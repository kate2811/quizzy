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
      <div className="row mb-2">
        <label className="col-2 col-form-label">Archive it</label>
        <div className="col-3">
          <span className="switch switch-success">
            <label>
              <input type="checkbox" checked={isChecked} onChange={onChange} name="select" />
              <span />
            </label>
          </span>
        </div>
      </div>

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
