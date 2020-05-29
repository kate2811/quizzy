import React from 'react'
import style from './QuizCard.module.css'
import cx from 'classnames'

type Props = {
  title?: string
  description?: string
  className?: string
}

const actionsIcons = ['fa-share', 'fa-edit', 'fa-chart-line']

const QuizCard: React.FC<Props> = ({ title, description, className }) => {
  return (
    <div className={cx('card', className)}>
      <div className={cx('card-body', style.card__body)}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>

      <div className={style.card__footer}>
        {actionsIcons.map((item, index) => (
          <button key={index} className="btn btn-outline-secondary btn-sm">
            <i className={cx('fas', item)} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizCard
