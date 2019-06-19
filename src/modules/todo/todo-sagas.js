// @see https://redux-saga.js.org/docs/api/
import { takeLatest, call, select, put } from 'redux-saga/effects'

export function * watchAddTodo () {
  yield takeLatest('todo/addTodo', fetchQiitaLinkTask)
}

function * fetchQiitaLinkTask (action) {
  const { nowId }          = yield select(state => state.todo)
  const { payload, error } = yield call(fetchQiitaLink, action.payload)
  if (error) {
    console.error(error)
    return
  }
  if (!payload) {
    console.log('Qiita link not found.')
    return
  }
  yield put({
    type: 'todo/setFetchedLink',
    payload: { id: nowId, link: payload },
  })
}

function fetchQiitaLink (payload) {
  return fetch(`https://qiita.com/api/v2/items?page=1&per_page=1&query=title:${payload}`)
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
