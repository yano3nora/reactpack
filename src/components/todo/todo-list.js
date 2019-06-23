import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoModule } from 'modules/todo-module'

export const TodoList = (props) => {
  const dispatch = useDispatch()
  const todos    = useSelector(state => state.todo.list)

  return (
    <ul className="uk-list uk-list-divider">
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            onClick={e => dispatch(TodoModule.actions.toggleTodo(todo.id))}
            style={{ textDecoration: `${todo.isDone ? 'line-through' : 'none'}` }}
          >
            <span uk-icon={`${todo.isDone ? 'check' : 'chevron-right'}`} />&nbsp;
            {todo.text}
          </span>
          {
            todo.link &&
              <a uk-icon="link" target="_blank" rel="noopener noreferrer" href={todo.link} />
          }
        </li>
      ))}
    </ul>
  )
}
