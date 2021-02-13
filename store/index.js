import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { workspaceReducer } from './reducers/workspace.reducer';
import { backlogReducer } from './reducers/backlog.reducer';
import { userReducer } from './reducers/user.reducer';

const rootReducer = combineReducers({
  workspaceReducer,
  backlogReducer,
  userReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
