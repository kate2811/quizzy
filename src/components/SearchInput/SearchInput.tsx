import React, { useCallback } from 'react'
import search from '../../images/icon/Search.svg'

type Props = {
  setFilter: (e: any) => void
}

const SearchInput: React.FC<Props> = ({ setFilter }) => {
  const onChange = useCallback((e) => setFilter(e.target.value), [setFilter])
  return (
    <form className="d-flex position-relative flex-row-fluid">
      <div className="input-group shadow-sm">
        <div className="input-group-prepend">
          <span className="input-group-text bg-white border-0 py-7 px-8">
            <span className="svg-icon svg-icon-xl">
              <img src={search} alt="search" />
            </span>
          </span>
        </div>

        <input
          type="text"
          className="form-control h-auto border-0 font-size-lg py-7 px-1"
          placeholder="Search..."
          onChange={onChange}
        />
      </div>
    </form>
  )
}

export default SearchInput
