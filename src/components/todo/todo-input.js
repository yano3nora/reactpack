import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodoModule } from 'modules/todo/todo-module'

export const TodoInput = (props) => {
  //
  // @see https://reactjs.org/docs/hooks-state.html
  //
  const [value, setValue] = useState('')
  const dispatch          = useDispatch()

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {  // enter, return.
      handleClickAdd()
    }
  }

  const handleClickAdd = () => {
    if (value) {
      dispatch(TodoModule.actions.addTodo(value))
      setValue('')
    }
  }

  return (
    <div className="uk-flex">
      <input
        type="text"
        className="uk-input"
        onKeyUp={handleKeyUp}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button className="uk-button" onClick={handleClickAdd}>ADD</button>
    </div>
  )
}
