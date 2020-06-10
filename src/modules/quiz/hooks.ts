import { useSelector } from '../index'
import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { actions } from './actions'
import { Quiz } from './types'

export function useIsQuizzesLoading() {
  return useSelector((state) => state.quiz.isLoading)
}

export function useQuizzes() {
  return useSelector((state) => state.quiz.quizzes)
}

export function useQuizByUuid(uuid: string) {
  return useSelector((state) => state.quiz.quizzes.find((item) => item.uuid === uuid))
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

export function useGetQuizByUuid(uuid: string) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.loadQuizByUuid(uuid))
  }, [dispatch, uuid])
}

export function useEditQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz: Quiz) => {
      console.log(quiz)
      return dispatch(actions.editQuiz(quiz))
    },
    [dispatch]
  )
}

export function useDeleteQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (uuid: string) => {
      return dispatch(actions.deleteQuiz(uuid))
    },
    [dispatch]
  )
}
