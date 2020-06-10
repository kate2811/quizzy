import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'
import { Quiz } from './types'
import * as reactRedux from 'react-redux'
import { State } from '../index'

const useSelector: <TSelected>(
  selector: (state: State) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected = reactRedux.useSelector

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

export function useDeleteQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz: Quiz) => {
      return dispatch(actions.publishQuiz(quiz))
    },
    [dispatch]
  )
}

export function useEditQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz: Quiz) => {
      return dispatch(actions.publishQuiz(quiz))
    },
    [dispatch]
  )
}

export function useQuizByUuid(uuid: string) {
  return useSelector((state) => state.quiz.quizzes).find((item) => item.uuid === uuid)
}

export function useLoadQuizByUuid(uuid: string) {
  const dispatch = useDispatch()
  return useCallback(() => {
    return dispatch(actions.loadQuizByUuid(uuid))
  }, [dispatch, uuid])
}
