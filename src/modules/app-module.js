import { createSlice } from 'redux-starter-kit'

export const AppModule = createSlice({
  slice: 'app',
  initialState: {
    // Refs as state.app.* by selector.
    qiitaApi: '',
  },
  reducers: {}
})
