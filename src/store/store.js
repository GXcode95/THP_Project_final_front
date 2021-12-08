import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './users/reducer'
import themeReducer from './themes/reducer';
import gamesReducer from './games/reducer'


const rootReducer = combineReducers({
  userReducer,
  themeReducer,
  gamesReducer
})

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    // Needed to use Redux DevTools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store