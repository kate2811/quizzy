import axios from 'axios'
import { Quiz, UserSignInData, UserSingUpData } from '../module/types'
import actions from '../module/actions'
import store from '../store'

class Api {
  private readonly apiUrl: string
  private readonly headers: { headers: { 'Content-Type': string } }
  private token: null | string
  private config: any

  constructor() {
    this.apiUrl = 'http://47.56.144.147:5555'
    this.token = null
    this.headers = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }
    this.config = {}
  }

  getConfig() {
    this.token = localStorage.getItem('accessToken')
    return (this.config = this.token
      ? { headers: { ...this.headers.headers, Authorization: 'Bearer ' + this.token } }
      : this.headers)
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
    return axios.delete(this.apiUrl + url, { headers: { data: data, ...this.getConfig().headers } })
  }
}

const api = new Api()

export async function signIn(userData: Omit<UserSignInData, 'isRemember'>) {
  let response = await api.post('/auth/login', userData)
  return response.data
}

export async function getUserData() {
  let response = await api.get('/users/current')
  return response.data
}

export async function signUp(userData: UserSingUpData) {
  let response = await api.post('/auth/sign-up', userData)
  return response.data
}

export async function saveQuiz(quiz: Quiz) {
  store.dispatch(actions.saveQuiz(quiz))
}

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (401 === error.response.status) {
      store.dispatch(actions.signInFailure())
      localStorage.removeItem('accessToken')
    }
    return Promise.reject(error)
  }
)
