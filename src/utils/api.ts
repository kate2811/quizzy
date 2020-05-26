import axios from 'axios'
import { Quiz, UserSignInData, UserSingUpData } from '../module/types'
import actions from '../module/actions'
import store from '../store'

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

export async function saveQuiz(quiz: Quiz) {
  store.dispatch(actions.saveQuiz(quiz))
}

/*export async function signUpCheck(email: string) {
  const response = await api.get('/auth/sign-up-check?email=' + email)
  return response.status === 200
}*/

export function handleError(error) {
  const status = error.response.status
  const token = localStorage.getItem('accessToken')
  let errorMessage = 'Something went wrong'

  if (status === 401 && token) {
    store.dispatch(actions.signInFailure())
    localStorage.removeItem('accessToken')
    errorMessage = 'Your session has expired. Please sign-in again'
  }

  if (status === 401 && !token) {
    store.dispatch(actions.signInFailure())
    errorMessage = 'Authorization failed, please try again'
  }

  if (status === 400) {
    const errorId = error.response.data.errors
    errorMessage = errorId[Object.keys(errorId)[0]]
  }

  store.dispatch(actions.getNotification({ type: 'warning', text: errorMessage }))
}
