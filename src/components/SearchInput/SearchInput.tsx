import React from 'react'
import search from '../../images/icon/Search.svg'

const SearchInput: React.FC = () => {
  return (
    <form className="d-flex position-relative flex-row-fluid">
      <div className="input-group shadow-sm">
        <div className="input-group-prepend">
          <span className="input-group-text bg-white border-0 py-7 px-8">
            <span className="svg-icon svg-icon-xl">
              <img src={search} />
            </span>
          </span>
        </div>

        <input type="text" className="form-control h-auto border-0 font-size-lg py-7 px-1" placeholder="Search..." />
      </div>
    </form>
  )
}

export default SearchInput
