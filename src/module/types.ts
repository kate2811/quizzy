export type State = {
  user: null | UserData
  isLoading: boolean
}

export type UserLogin = {
  username: string
  password: string
}

export type UserData = {
  id: number
  username: string
}

export type UserSingUpData = {
  email: string
  username: string
  password: string
}
