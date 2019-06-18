import { createSlice } from 'redux-starter-kit'

export const TodoModule = createSlice({
  slice: 'todo',
  initialState: {
    list:  [],  // Refs as state.todo.list from component by useSelector().
    nextId: 0,
  },
  reducers: {

    /**
     * Add new todo to list.
     * Refs as TodoModule.actions.addTodo() by useDispatch().
     *
     * @param state  - state.todo
     * @param action - ActionPayload
     */
    addTodo: (state, action) => {
      const todo = {
        id:   state.nextId++,
        text: action.payload,
        isDone: false,
      }
      state.list.push(todo)
    },

    /**
     * Toggle todo's status.
     *
     * @param state  - state.todo
     * @param action - ActionPayload
     */
    toggleTodo: (state, action) => {
      const id = action.payload
      state.list.forEach(todo => {
        todo.isDone = (todo.id === id) ? !todo.isDone : todo.isDone
      })
    }
  }
})
