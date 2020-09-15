import React from 'react'
import Autocomplete from './Autocomplete'

export default function ({ tags, onRemoveQuizTags, onAddQuizTags, editedQuiz }) {
  const data = ['abc', 'bcd', 'cvb', 'abcd', 'acc']
  return (
    <Autocomplete
      editedQuiz={editedQuiz}
      data={data}
      tags={tags}
      onAddQuizTags={onAddQuizTags}
      onRemoveQuizTags={onRemoveQuizTags}
    />
  )
}
