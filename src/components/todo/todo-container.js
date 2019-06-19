import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, getDefaultMiddleware } from 'redux-starter-kit'

// My middlewares.
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'bases/saga-middleware'
import { Logger } from 'bases/logger-middleware'

// My components.
import { TodoList }  from 'components/todo/todo-list'
import { TodoInput } from 'components/todo/todo-input'

// My module.
import { TodoModules } from 'modules/todo/todo-modules'

// Generate store and saga worker.
const Saga  = createSagaMiddleware()
const store = configureStore({
  // Adding reducers and middlewares, if extends.
  reducer: combineReducers({
    todo: TodoModules.reducer,
  }),
  middleware: (process.env.NODE_ENV === 'development')
    ? [...getDefaultMiddleware(), Saga, Logger]
    : [...getDefaultMiddleware(), Saga],
})
Saga.run(rootSaga)

// Render container & components to dom.
render(
  <Provider store={store}>
    <TodoInput />
    <TodoList />
  </Provider>,
  document.getElementById('root')
)
