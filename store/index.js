import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { workspaceReducer } from './reducers/workspace.reducer';
import { backlogReducer } from './reducers/backlog.reducer';

const rootReducer = combineReducers({
  workspaceReducer,
  backlogReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);