import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { WorkspaceReducer } from './reducer/workspace.reducer';

const rootReducer = combineReducers({
  workspaceReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);