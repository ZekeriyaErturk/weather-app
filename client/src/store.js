import { createStore, applyMiddleware, combineReducers } from 'redux';

// middlewares
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import weatherReducer from './reducers/weatherReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';
import cacheReducer from './reducers/cacheReducer';

const reducer = combineReducers({
  cities: weatherReducer,
  filter: filterReducer,
  notification: notificationReducer,
  cache: cacheReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
