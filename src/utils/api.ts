import axios from 'axios'
import { UserSignInData, UserSingUpData } from '../modules/auth/types'
import { UpdatedQuizQuestion, Quiz } from '../modules/quiz/types'

class Api {
  private readonly apiUrl: string
  private readonly headers: { headers: { 'Content-Type': string } }
  private config: { headers: { [key: string]: string } }

  constructor() {
    this.apiUrl = 'http://localhost:5555'
    this.headers = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }
    this.config = this.headers
  }

  getConfig(data?) {
    const token = localStorage.getItem('accessToken')
    if (token) {
      this.config = { headers: { ...this.config.headers, Authorization: 'Bearer ' + token } }
    }
    if (data) {
      this.config = { headers: { ...this.config.headers, data: data } }
    }
    return this.config
  }

  get(url) {
    return axios.get(this.apiUrl + url, this.getConfig())
  }

  post(url, data) {
    return axios.post(this.apiUrl + url, data, this.getConfig())
  }

  put(url, data) {
    return axios.put(this.apiUrl + url, data, this.getConfig())
  }

  delete(url, data) {
    return axios.delete(this.apiUrl + url, this.getConfig())
  }
}

export const api = new Api()

export async function signIn(userData: Omit<UserSignInData, 'isRemember'>) {
  const response = await api.post('/auth/login', userData)
  return response.data
}

export async function getUserData() {
  const response = await api.get('/users/current')
  return response.data
}

export async function signUp(userData: UserSingUpData) {
  const response = await api.post('/auth/sign-up', userData)
  return response.data
}

export async function addQuiz(quiz: Quiz) {
  const response = await api.post('/admin/quizzes', quiz)
  return response.data
}

export async function getQuizzes() {
  const response = await api.get('/admin/quizzes')
  return response.data
}

export async function getQuiz(uuid: string) {
  const response = await api.get('/quizzes/' + uuid)
  return response.data
}

export async function updateQuizData(quizData: Omit<Quiz, 'questions'>) {
  const response = await api.put('/admin/quizzes/' + quizData.uuid, quizData)
  return response.data
}

export async function removeQuiz(uuid: string) {
  const response = await api.delete('/admin/quizzes/' + uuid, null)
  return response.data
}

export async function addNewQuizQuestion(newQuestion: UpdatedQuizQuestion) {
  const response = await api.post('/admin/quizzes/' + newQuestion.quizUuid + '/questions', newQuestion.question)
  return response.data
}

export async function editQuizQuestion(question: UpdatedQuizQuestion) {
  const response = await api.put(
    '/admin/quizzes/' + question.quizUuid + '/questions/' + question.question.uuid,
    question.question
  )
  return response.data
}

export async function removeQuizQuestion(question: UpdatedQuizQuestion) {
  const response = await api.delete(
    '/admin/quizzes/' + question.quizUuid + '/questions/' + question.question.uuid,
    null
  )
  return response.data
}
