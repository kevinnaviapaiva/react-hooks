import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import { testReducer} from './test';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  router: connectRouter(history),
  test: testReducer
})

export type RootState = ReturnType<typeof rootReducer>;
