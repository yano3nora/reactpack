import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Import global Store, Saga.
import { Store, Saga } from 'bases/store'

// My middlewares.
import { TodoSagas } from 'middlewares/todo-sagas'

// My components.
import { TodoList }  from 'components/todo/todo-list'
import { TodoInput } from 'components/todo/todo-input'

const dest = document.querySelector('#todo-container')
if (dest) {
  // Run workers required on this container, using global worker.
  Saga.run(TodoSagas)
  // Render child components, using global state.
  render(
    <Provider store={Store}>
      <TodoInput />
      <TodoList />
    </Provider>,
    dest
  )
}
