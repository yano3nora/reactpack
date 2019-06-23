import { all } from 'redux-saga/effects'

export function * AppSagas () {
  yield all([
    helloSaga(),
  ])
}

function * helloSaga () {
  console.log('Hello Sagas!')
}
