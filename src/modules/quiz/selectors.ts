import { createSelector } from 'reselect'
import { State } from '../index'

const quizzes = (state: State) => state.quiz.quizzes
const filter = (state: State) => state.quiz.filter

export const getFilteredQuizzes = createSelector(quizzes, filter, (quizzes, filter) => {
  if (quizzes.length > 0 && filter) {
    const query = filter.toLowerCase()
    return quizzes.filter((item) =>
      [item.title, item.description].map((item) => item.toLowerCase()).some((item) => item.includes(query))
    )
  }

  return quizzes
})
