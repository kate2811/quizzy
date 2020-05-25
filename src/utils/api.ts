import axios from 'axios'
import { Quiz, UserSignInData, UserSingUpData } from '../module/types'
import actions from '../module/actions'
import store from '../store'

export async function signIn(userData: Omit<UserSignInData, 'isRemember'>) {
  let response = await axios.post('http://localhost:5000/auth/login', userData, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return response.data
}

export async function getUserData(token: string) {
  let response = await axios.get('http://localhost:5000/users/current', {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + token
    }
  })
  return response.data
}

export async function signUp(userData: UserSingUpData) {
  let response = await axios.post('http://localhost:5000', userData, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
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
