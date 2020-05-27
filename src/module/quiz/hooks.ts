import { useSelector } from '../index'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'

export function useQuizzes() {
  return useSelector((state) => state.quiz.quizzes)
}

export function usePublishQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz) => {
      return dispatch(actions.publishQuiz(quiz))
    },
    [dispatch]
  )
}
