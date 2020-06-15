import React from 'react'
import { Link } from 'react-router-dom'
import style from './QuizCard.module.css'
import cx from 'classnames'

const NewQuizCard: React.FC = () => {
  return (
    <div className="col-lg-6">
      <Link to="/create">
        <div className={cx('card mb-8 mb-lg-0 bg-light-success', style.card_new)}>
          <div className="card-body row">
            <div className="col-sm-7 d-flex align-items-center justify-content-around">
              <i className="fas fa-plus-circle icon-3x text-success" />
              <span className="text-success font-weight-bold font-size-h1">Create new quiz!</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NewQuizCard
