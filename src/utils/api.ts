import { UserLogin} from "../module/types"

export async function getAccessToken(userData: UserLogin) {
  let response = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  })
  return await response.json()
}

export async function getUser(token: string) {
  let response = await fetch('http://localhost:5000/users/current', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + token
    }
  })
  return await response.json()
}
