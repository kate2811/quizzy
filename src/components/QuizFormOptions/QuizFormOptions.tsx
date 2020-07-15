import React from 'react'
import { QuizAnswer, UpdateQuizOption } from '../../modules/quiz/types'
import QuizFormOption from './QuizFormOption'
import style from '../CreateQuiz/CreateQuiz.module.css'

type Props = {
  quiz: string
  question: string
  options: QuizAnswer[] | undefined
  onAddEmptyOptions: any
  isEmptyOption: boolean | undefined
  onEditOption: (option: UpdateQuizOption) => void
  onAddOption: (option: UpdateQuizOption) => void
  onDelete: (quizUuid: string, questionUuid: string, optionUuid: string | undefined) => void
}

const QuizFormOptions: React.FC<Props> = ({ options, question, onAddEmptyOptions, isEmptyOption, ...props }) => {
  return (
    <div className={style.options}>
      {options &&
        options.map((item, index) => <QuizFormOption key={index} option={item} question={question} {...props} />)}
      <button
        onClick={onAddEmptyOptions}
        disabled={isEmptyOption || !question}
        className="btn btn-sm btn-light-success font-weight-bolder my-3 mr-3 mt-6"
      >
        Add new option
      </button>
    </div>
  )
}

export default QuizFormOptions
