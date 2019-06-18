import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoModule } from 'modules/todo-module'

export const TodoList = (props) => {
  const dispatch = useDispatch()
  const todos    = useSelector(state => state.todo.list)

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}
          onClick={e => dispatch(TodoModule.actions.toggleTodo(todo.id))}
          style={{ textDecoration: `${todo.isDone ? 'line-through' : 'none'}` }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  )
}
