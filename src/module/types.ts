export type State = {
  user: null | UserData
  isLoading: boolean
}

export type UserData = {
  id: number
  username: string
}

export type UserSignInData = {
  email: string
  password: string
  isRemember: boolean
}

export type UserSingUpData = {
  email: string
  username: string
  password: string
}
