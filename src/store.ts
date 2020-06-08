import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootSaga, reducer } from './module'

const sagaMiddleware = createSagaMiddleware()

export default createStore(reducer, composeWithDevTools({ name: 'Quizzy' })(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
