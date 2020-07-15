import { put, delay, takeEvery, all } from 'redux-saga/effects'
import { actions, ActionTypes } from './actions'
import { actions as authActions } from '../auth/actions'
import { v4 as uuidv4 } from 'uuid'
import { selectState } from '../index'

function* addNotification({ payload }: ReturnType<typeof actions.getNotification>) {
  const uuid = uuidv4()
  yield put(actions.addNotification({ ...payload, uuid }))
  yield delay(5000)
  const notification = yield selectState((state) => state.core.notifications.some((item) => item.uuid === uuid))
  if (notification) {
    yield put(actions.removeNotification(uuid))
  }
}

function* handleError({ payload }: ReturnType<typeof actions.handleError>) {
  const status = payload.status
  const token = localStorage.getItem('accessToken')
  let errorMessage = 'Something went wrong'

  if (status === 401 && token) {
    yield put(authActions.signInFailure())
    localStorage.removeItem('accessToken')
    errorMessage = 'Your session has expired. Please sign-in again'
  }

  if (status === 401 && !token) {
    yield put(authActions.signInFailure())
    errorMessage = 'Authorization failed, please try again'
  }

  if (status === 400) {
    const errorId = payload.data.errors
    errorMessage = errorId[Object.keys(errorId)[0]]
  }

  if (status >= 500) {
    errorMessage = 'The server did not response. Please, try again later '
  }

  yield put(actions.getNotification({ type: 'warning', text: errorMessage }))
}

function* coreSaga() {
  yield all([takeEvery(ActionTypes.getNotification, addNotification), takeEvery(ActionTypes.handleError, handleError)])
}

export default coreSaga
