import { useSelector } from '../index'
import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { actions } from './actions'
import { Quiz } from './types'

export function useQuizzes() {
  return useSelector((state) => state.quiz.quizzes)
}

export function useQuizByUuid(uuid) {
  return useSelector((state) => state.quiz.quizzes.find((item) => item.uuid === uuid))
}

export function useIsQuizzesLoading() {
  return useSelector((state) => state.quiz.isLoading)
}

export function usePublishQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz: Quiz) => {
      console.log(quiz)
      return dispatch(actions.publishQuiz(quiz))
    },
    [dispatch]
  )
}

export function useGetQuizByUuid(uuid) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getQuizByUuid(uuid))
    dispatch(actions.loadQuizzes())
  }, [dispatch, uuid])
}
