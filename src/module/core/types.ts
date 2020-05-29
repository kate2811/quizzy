export type State = {
  notifications: Notification[]
}
export type NotificationType = 'warning' | 'success'

export type Notification = {
  uuid: string
  text: string
  type: NotificationType
}
