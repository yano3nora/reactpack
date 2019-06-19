import { createSlice } from 'redux-starter-kit'

export const TodoModules = createSlice({
  slice: 'todo',
  initialState: {
    list:  [],  // Refs as state.todo.list from component by useSelector().
    nowId: 0,
  },
  reducers: {

    /**
     * Add new todo to list.
     * Refs as TodoModule.actions.addTodo() by useDispatch().
     *
     * @param state  - state.todo
     * @param action - type: 'todo/addTodo', payload: string
     */
    addTodo: (state, action) => {
      const todo = {
        id:   ++state.nowId,
        text: action.payload,
        link: '',
        isDone: false,
      }
      state.list.push(todo)
    },

    /**
     * Toggle todo's status.
     *
     * @param state  - state.todo
     * @param action - type: 'todo/toggleTodo', payload: int
     */
    toggleTodo: (state, action) => {
      const id = action.payload
      state.list.forEach(todo => {
        todo.isDone = (todo.id === id) ? !todo.isDone : todo.isDone
      })
    },

    /**
     * Set fetched link.
     *
     * @param state  - state.todo
     * @param action - type: 'todo/setFetchedLink', payload: { id: int, link: string }
     */
    setFetchedLink: (state, action) => {
      state.list.forEach(todo => {
        todo.link = (todo.id === action.payload.id) ? action.payload.link : todo.link
      })
    },

  }
})
