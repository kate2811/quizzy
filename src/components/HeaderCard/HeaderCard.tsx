import React from 'react'
import background from '../../images/bg/bg-home.svg'
import illustration from '../../images/illustration/working.svg'
import SearchInput from '../SearchInput'

type Props = {
  title: string
}

const HeaderCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="card position-relative overflow-hidden mb-8">
      <div className="position-absolute bottom-0 left-0 right-0 d-none d-lg-flex flex-row-fluid">
        <span className="svg-icon svg-icon-full flex-row-fluid svg-icon-dark opacity-3">
          <img src={background} />
        </span>
      </div>
      <div className="position-absolute d-flex top-0 right-0 offset-lg-6 col-lg-6 opacity-30 opacity-lg-100">
        <span className="svg-icon svg-icon-full flex-row-fluid p-10">
          <img src={illustration} height={270} />
        </span>
      </div>
      <div className="card-body">
        <div className="col-lg-6">
          <div className="d-flex align-items-center flex-wrap py-25 px-5">
            <h2 className="text-dark font-weight-bolder mr-12 mb-5">{title}</h2>

            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCard
