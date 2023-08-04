import { createStore, applyMiddleware, combineReducers } from 'redux';
import { appReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
