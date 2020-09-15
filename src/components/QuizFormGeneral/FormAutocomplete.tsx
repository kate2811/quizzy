import React from 'react'
import Autocomplete from '../Autocomplete'
import { Quiz } from '../../modules/quiz/types'

type Props = {
  editedQuiz: Quiz | undefined
  tags: string[]
  onAddQuizTags: (quizUuid: string, tag: string) => void
  onRemoveQuizTags: (quizUuid: string, tag: string) => void
}

const FormAutocomplete: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="form-group row">
      <label className="col-form-label col-3 text-lg-right text-left">Quiz tags</label>
      <div className="col-9">
        <Autocomplete {...props} />
      </div>
    </div>
  )
}

export default FormAutocomplete
