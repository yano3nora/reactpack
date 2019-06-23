import { combineReducers, configureStore, getDefaultMiddleware } from 'redux-starter-kit'

// Middlewares.
import createSagaMiddleware from 'redux-saga'
import { AppLogger } from 'middlewares/app-logger'
import { AppSagas }  from 'middlewares/app-sagas'

// Domain Modules.
import { TodoModule } from 'modules/todo-module'

// Exporting Store as global state, and Saga as global worker.
export const Saga  = createSagaMiddleware()
export const Store = configureStore({
  reducer: combineReducers({
    todo: TodoModule.reducer,
    /**
     * Adding domain modules if extends.
     *
     * 'user':    UserModule.reducer,
     * 'article': ArticleModule.reducer,
     *
     */
  }),
  middleware: (process.env.NODE_ENV === 'development')
    ? [...getDefaultMiddleware(), Saga, AppLogger]
    : [...getDefaultMiddleware(), Saga],
})

// Run workers launching always on entire app.
Saga.run(AppSagas)
