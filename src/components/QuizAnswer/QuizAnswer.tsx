import React from 'react'
import style from "./QuizAnswer.module.css"

const QuizAnswer: React.FC = () => {
  return (
    <div className={style.answer}>
      <input type="text" placeholder='Enter answer option' />
      <button>
        <i className='fas fa-check'/>
      </button>
      <button>
        <i className='fas fa-times'/>
      </button>
    </div>
  )
}

export default QuizAnswer
