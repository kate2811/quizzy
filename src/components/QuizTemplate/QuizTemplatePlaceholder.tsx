import React from 'react'
import Skeleton from 'react-loading-skeleton'
import style from './QuizTemplate.module.css'

const QuizTemplatePlaceholder = () => {
  const skeletonOption = (
    <div className="font-size-h6 font-weight-bolder text-dark mb-2">
      <Skeleton width={150} height={19} />
    </div>
  )

  const skeletonQuestion = (
    <div className={style.container_question}>
      <div className="font-size-h6 font-weight-bolder text-dark mb-2">
        <Skeleton width={100} />
      </div>
      <Skeleton className="font-size-lg mb-5 h-auto py-8 px-6 rounded-lg" />
      {skeletonOption}
      {skeletonOption}
    </div>
  )

  return (
    <>
      <h1 className="font-weight-bolder text-dark font-size-h1-lg">
        <Skeleton width={200} />
      </h1>
      <p className="text-muted font-weight-bold font-size-h4">
        <Skeleton width={350} />
      </p>
      {skeletonQuestion}
      {skeletonQuestion}

      <div className="mt-4">
        <Skeleton width={163} height={50} />
      </div>
    </>
  )
}

export default QuizTemplatePlaceholder
