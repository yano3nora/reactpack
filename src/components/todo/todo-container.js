import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, getDefaultMiddleware } from 'redux-starter-kit'

// My middlewares.
import { Logger } from 'bases/logger-middleware'

// My components.
import { TodoList }  from 'components/todo/todo-list'
import { TodoInput } from 'components/todo/todo-input'

// My module.
import { TodoModule } from 'modules/todo-module'

// Generate store.
const store = configureStore({
  // Adding reducers and middlewares, if extends.
  reducer: combineReducers({
    todo: TodoModule.reducer,
  }),
  middleware: (process.env.NODE_ENV === 'development')
    ? [...getDefaultMiddleware(), Logger]
    : [...getDefaultMiddleware()],
})

// Render container & components to dom.
render(
  <Provider store={store}>
    <TodoList />
    <TodoInput />
  </Provider>,
  document.getElementById('root')
)
