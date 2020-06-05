import React from 'react'
import style from './QuizCard.module.css'
import cx from 'classnames'
import Dropdown from '../Dropdown'

type Props = {
  title?: string
  description?: string
  className?: string
}

const actions = [
  { title: 'Results', to: '/' },
  { title: 'Edit', to: '/' },
  { title: 'Share', to: '/' }
]

const QuizCard: React.FC<Props> = ({ title, description, className }) => {
  const placeholder = (
    <div className={cx('card', className)}>
      <div className={cx('card-body', style.card__body)}>
        <div className={style.placeholder__title} />
        <div className={style.placeholder__description} />
      </div>
      <div className={style.card__footer} />
    </div>
  )

  return (
    <>
      {title && description ? (
        <div className="col-lg-6">
          <div className="card mb-8">
            <div className="card-body row">
              <div className="col-sm-7">
                <h2 className="text-dark mb-4">{title}</h2>
                <p className="text-dark-50 font-size-lg overflow-hidden">{description}</p>
              </div>
              <div className="col-sm-5 d-flex align-items-center justify-content-sm-end">
                <Dropdown menuItems={actions} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        placeholder
      )}
    </>
  )
}

export default QuizCard
