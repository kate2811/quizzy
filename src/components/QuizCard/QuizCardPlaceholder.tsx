import React from 'react'
import Skeleton from 'react-loading-skeleton'

const QuizCardPlaceholder: React.FC = () => {
  return (
    <div className="col-lg-6">
      <div className="card mb-8">
        <div className="card-body row">
          <div className="col-sm-7">
            <h2 className="text-dark mb-4">
              <Skeleton width={150} />
            </h2>
            <p className="text-dark-50 font-size-lg overflow-hidden">
              <Skeleton width={300} />
            </p>
          </div>
          <div className="col-sm-5 d-flex align-items-center justify-content-sm-end">
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizCardPlaceholder
