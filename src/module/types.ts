export type State = {
  user: null | { name: string }
}

export type UserLogin = {
  username: string
  password: string
}

export type UserData = {
  id: number
  name: string
}

export type Token = {
  accessToken: string
}
