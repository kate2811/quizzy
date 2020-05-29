import { useSelector } from '../index'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'
import { Quiz } from './types'

export function useQuizzes() {
  return useSelector((state) => state.quiz.quizzes)
}

export function useIsQuizzesLoading() {
  return useSelector((state) => state.quiz.isLoading)
}

export function usePublishQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz: Quiz) => {
      return dispatch(actions.publishQuiz(quiz))
    },
    [dispatch]
  )
}
