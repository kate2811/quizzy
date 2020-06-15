import { Notification } from './types'
import createAction from '../../utils/createAction'
import { AxiosResponse } from 'axios'

export enum ActionTypes {
  getNotification = 'Get notification',
  addNotification = 'Add notification',
  removeNotification = 'Remove notification',
  handleError = 'Handle error'
}

export const actions = {
  getNotification: createAction<ActionTypes.getNotification, Omit<Notification, 'uuid'>>(ActionTypes.getNotification),
  addNotification: createAction<ActionTypes.addNotification, Notification>(ActionTypes.addNotification),
  removeNotification: createAction<ActionTypes.removeNotification, string>(ActionTypes.removeNotification),
  handleError: createAction<ActionTypes.handleError, AxiosResponse>(ActionTypes.handleError)
}
