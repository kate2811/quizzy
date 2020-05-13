import { createStore, applyMiddleware } from 'redux'
import * as reactRedux from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './module/reducer'
import mySaga from './module/sagas'

const sagaMiddleware = createSagaMiddleware()

export type State = ReturnType<typeof reducer>

export const useSelector: <TSelected>(
  selector: (state: State) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected = reactRedux.useSelector

export default createStore(reducer, composeWithDevTools({ name: 'Quizzy' })(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mySaga)
