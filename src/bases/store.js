import { combineReducers, configureStore, getDefaultMiddleware } from 'redux-starter-kit'

// Middlewares.
import createSagaMiddleware from 'redux-saga'
import { AppLogger } from 'middlewares/app-logger'
import { AppSagas }  from 'middlewares/app-sagas'

// Modules.
import { AppModule } from 'modules/app-module'
import { TodoModule } from 'modules/todo-module'

// Exporting Store as global state, and Saga as global worker.
export const Saga  = createSagaMiddleware()
export const Store = configureStore({
  reducer: combineReducers({
    app: AppModule.reducer,
    todo: TodoModule.reducer,
    /**
     * Adding domain modules if extends.
     *
     * user:    UserModule.reducer,
     * article: ArticleModule.reducer,
     */
  }),
  middleware: (process.env.NODE_ENV === 'development')
    ? [...getDefaultMiddleware(), Saga, AppLogger]
    : [...getDefaultMiddleware(), Saga],
  preloadedState: {
    app: {
      qiitaApi: 'https://qiita.com/api/v2/items?page=1&per_page=1&query=title:',
    },
  },
})

// Run workers launching always on entire app.
Saga.run(AppSagas)
