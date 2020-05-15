export type State = {
  user: null | UserData
  isLoading: boolean
}

export type UserData = {
  id: number
  username: string
}

export type UserSignInData = {
  username: string
  password: string
}

export type UserSingUpData = {
  email: string
  username: string
  password: string
}
