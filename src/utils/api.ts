import axios from 'axios'
import { UserSignInData, UserSingUpData } from '../modules/auth/types'
import { Quiz } from '../modules/quiz/types'

class Api {
  private readonly apiUrl: string
  private readonly headers: { headers: { 'Content-Type': string } }
  private config: { headers: { [key: string]: string } }

  constructor() {
    this.apiUrl = 'http://47.56.144.147:5555'
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

export async function getQuizByUuid(uuid) {
  const response = await api.get('/quizzes/' + uuid)
  return response.data
}

export async function deleteQuiz(uuid: string) {
  const response = await api.post('/quizzes', uuid)
  return response.data
}

export async function editQuiz(quiz: Quiz) {
  const response = await api.post('/quizzes', quiz)
  return response.data
}
