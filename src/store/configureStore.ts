import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { Action, configureStore, Middleware } from '@reduxjs/toolkit';

import { rootReducer, history } from './reducers';

const logger: Middleware = (store) => (next) => (action: Action) => {
  // console.info('dispatching', action);
  const result = next(action);
  // console.info('next state', store.getState());
  return result;
};

export default configureStore({
  reducer: rootReducer,
  middleware: [routerMiddleware(history), logger, thunk]
})
