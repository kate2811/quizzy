import React from 'react'
import SearchInput from './SearchInput'
import { useSetFilter } from '../../modules/quiz/hooks'

export default function () {
  const setFilter = useSetFilter()
  return <SearchInput setFilter={setFilter} />
}
