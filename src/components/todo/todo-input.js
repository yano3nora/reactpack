import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodoModule } from 'modules/todo-module'

export const TodoInput = (props) => {
  //
  // @see https://reactjs.org/docs/hooks-state.html
  //
  const [value, setValue] = useState('')
  const dispatch          = useDispatch()

  const handleClickAdd = () => {
    if (value) {
      dispatch(TodoModule.actions.addTodo(value))
      setValue('')
    }
  }

  return (
    <div>
      <input type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={handleClickAdd}>ADD</button>
    </div>
  )
}
