export type State = {
  user: null | UserData
  isLoading: boolean
}

export type UserData = {
  uuid: string
  email: string
  firstName: string
  lastName: string
  createDate: string
  updateDate: string
}

export type UserSignInData = {
  email: string
  password: string
  isRemember: boolean
}

export type UserSingUpData = {
  email: string
  firstName: string
  lastName: string
  password: string
}
