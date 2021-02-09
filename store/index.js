import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { workspaceReducer } from './reducers/workspace.reducer';

const rootReducer = combineReducers({
  workspaceReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);