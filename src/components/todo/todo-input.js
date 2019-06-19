import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodoModules } from 'modules/todo/todo-modules'

export const TodoInput = (props) => {
  //
  // @see https://reactjs.org/docs/hooks-state.html
  //
  const [value, setValue] = useState('')
  const dispatch          = useDispatch()

  const handleClickAdd = () => {
    if (value) {
      dispatch(TodoModules.actions.addTodo(value))
      setValue('')
    }
  }

  return (
    <div className="uk-flex">
      <input type="text" className="uk-input" onChange={e => setValue(e.target.value)} value={value} />
      <button className="uk-button" onClick={handleClickAdd}>ADD</button>
    </div>
  )
}
