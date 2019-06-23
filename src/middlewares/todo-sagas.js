// @see https://redux-saga.js.org/docs/api/
import { takeLatest, call, select, put } from 'redux-saga/effects'
import { TodoModule } from 'modules/todo-module'

export function * TodoSagas () {
  yield takeLatest(TodoModule.actions.addTodo, fetchQiitaLinkTask)
}

function * fetchQiitaLinkTask (action) {
  const qiitaApi           = yield select(state => state.app.qiitaApi)
  const { nowId }          = yield select(state => state.todo)
  const { payload, error } = yield call(fetchQiitaLink, qiitaApi, action.payload)
  if (error) {
    console.error(error)
    return
  }
  if (!payload) {
    console.log('Qiita link not found.')
    return
  }
  yield put(TodoModule.actions.setFetchedLink({ id: nowId, link: payload }))
}

function fetchQiitaLink (qiitaApi, payload) {
  return fetch(`${qiitaApi}${payload}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response
    })
    .then((response) => response.json())
    .then((results) => {
      let link = ''
      if (results.length) {
        link = results.pop().url
      }
      return { payload: link }
    })
    .catch((error) => ({ error: error }))
}
