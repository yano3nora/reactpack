/**
 * Entry point of redux-saga.
 * @see https://redux-saga.js.org/docs/advanced/RootSaga.html
 */
import { all } from 'redux-saga/effects'
import { watchAddTodo } from 'modules/todo/todo-sagas'

function * helloSaga () {
  console.log('Hello Sagas!')
}

/**
 * Notice how we now only export the rootSaga
 * single entry point to start all Sagas at once.
 */
export default function * rootSaga () {
  yield all([
    helloSaga(),
    watchAddTodo()
  ])
}
