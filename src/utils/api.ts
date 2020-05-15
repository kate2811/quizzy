import axios from 'axios'
import { UserLogin } from '../module/types'
import actions from '../module/actions'
import store from '../store'

export async function login(userData: UserLogin) {
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

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (401 === error.response.status) {
      store.dispatch(actions.loginFailure())
      localStorage.removeItem('accessToken')
    }
    return Promise.reject(error)
  }
)
