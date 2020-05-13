import { UserLogin} from "../module/types"
import axios from 'axios'

export async function login(userData: UserLogin) {
  let response = await axios.post('http://localhost:5000/auth/login', userData, { headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }})
  return response.data
}

export async function getUser(token: string) {
  let response = await axios.get('http://localhost:5000/users/current', {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + token
    }
  })
  return response.data
}
