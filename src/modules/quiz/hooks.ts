import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './actions'
import { UpdatedQuizQuestion, Quiz, UpdateQuizOption } from './types'
import { useSelector } from '../index'
import { getFilteredQuizzes } from './selectors'

export function useQuizzes() {
  return useSelector(getFilteredQuizzes)
}

export function useQuizQuestions(uuid: string) {
  const quiz = useSelector((state) => state.quiz.quizzes.find((item) => item.uuid === uuid))
  return quiz ? quiz.questions : undefined
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

export function useAddQuiz() {
  const dispatch = useDispatch()
  return useCallback(
    (quiz: Quiz) => {
      return dispatch(actions.addQuiz(quiz))
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

export function useAddQuizEmptyQuestion() {
  const dispatch = useDispatch()
  return useCallback(
    (quizUuid: string) => {
      return dispatch(actions.addQuizEmptyQuestion(quizUuid))
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
    (quizUuid: string, questionUuid: string | undefined) => {
      return questionUuid
        ? dispatch(actions.deleteQuizQuestion({ quizUuid, questionUuid }))
        : dispatch(actions.deleteQuizEmptyQuestion(quizUuid))
    },
    [dispatch]
  )
}

export function useIsEmptyQuestion(uuid: string) {
  const quiz = useSelector((state) => state.quiz.quizzes).find((item) => item.uuid === uuid)
  return quiz && quiz.questions.some((item) => !item.uuid)
}

export function useQuizOptions(quizUuid: string, questionUuid: string) {
  const quiz = useSelector((state) => state.quiz.quizzes.find((item) => item.uuid === quizUuid))
  const question = quiz ? quiz.questions.find((item) => item.uuid === questionUuid) : undefined
  return question && question.options
}

export function useAddQuizEmptyOption() {
  const dispatch = useDispatch()
  return useCallback(
    (quizUuid: string, questionUuid: string) => {
      return dispatch(actions.addQuizEmptyOption({ quizUuid, questionUuid }))
    },
    [dispatch]
  )
}

export function useEditQuizOption() {
  const dispatch = useDispatch()
  return useCallback(
    (option: UpdateQuizOption) => {
      return dispatch(actions.updateQuizOption(option))
    },
    [dispatch]
  )
}

export function useAddQuizOption() {
  const dispatch = useDispatch()
  return useCallback(
    (option: UpdateQuizOption) => {
      return dispatch(actions.addQuizOption(option))
    },
    [dispatch]
  )
}

export function useDeleteQuizOption() {
  const dispatch = useDispatch()
  return useCallback(
    (quizUuid: string, questionUuid: string, optionUuid: string | undefined) => {
      return optionUuid
        ? dispatch(actions.deleteQuizOption({ quizUuid, questionUuid, optionUuid }))
        : dispatch(actions.deleteQuizEmptyOption({ quizUuid, questionUuid }))
    },
    [dispatch]
  )
}

export function useIsEmptyOption(quizUuid: string, questionUuid: string) {
  const quiz = useSelector((state) => state.quiz.quizzes).find((item) => item.uuid === quizUuid)
  const question = quiz && quiz.questions.find((item) => item.uuid === questionUuid)
  return question && question.options.some((item) => !item.uuid)
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
