import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import { router5Reducer, router5Middleware } from 'redux-router5';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { Router } from 'router5';
import { IApplicationStore } from './store.types';
import { chessReducers } from '../reducers/reducers';
import { actionClassMiddleware } from '../middlewares/actionClassMiddleware';
import { sagas } from '../sagas/sagas';

export function createReduxStore(router: Router, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = router5Middleware(router);
  const loggerMiddleware = createLogger();

  const middlewares = [actionClassMiddleware, routerMiddleware, loggerMiddleware, sagaMiddleware];

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
      ...middlewares
    )
  )(createStore);

  const reducers = combineReducers({
    router: router5Reducer,
    chess: chessReducers
  })


  const store: Store = createStoreWithMiddleware(
    reducers,
  )

  sagaMiddleware.run(sagas)

  // @ts-ignore
  window.store = store

  return store;
}