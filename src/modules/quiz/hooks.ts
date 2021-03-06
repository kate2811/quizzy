import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'
import { UpdatedQuizQuestion, Quiz, QuizQuestion } from './types'
import { useSelector } from '../index'
import { getFilteredQuizzes } from './selectors'

export function useQuizzes() {
  return useSelector(getFilteredQuizzes)
}

export function useSetFilter() {
  const dispatch = useDispatch()
  return useCallback(
    (value: string) => {
      return dispatch(actions.setFilter(value))
    },
    [dispatch]
  )
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

export function useEditQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quizData: Omit<Quiz, 'questions'>) => {
      return dispatch(actions.updateQuiz(quizData))
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

export function useAddQuizQuestion() {
  const dispatch = useDispatch()
  return useCallback(
    (newQuestion: UpdatedQuizQuestion) => {
      return dispatch(actions.addQuizQuestion(newQuestion))
    },
    [dispatch]
  )
}

export function useEditQuizQuestion() {
  const dispatch = useDispatch()
  return useCallback(
    (question: UpdatedQuizQuestion) => {
      return dispatch(actions.updateQuizQuestion(question))
    },
    [dispatch]
  )
}

export function useDeleteQuizQuestion() {
  const dispatch = useDispatch()
  return useCallback(
    (question: UpdatedQuizQuestion) => {
      return dispatch(actions.deleteQuizQuestion(question))
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
