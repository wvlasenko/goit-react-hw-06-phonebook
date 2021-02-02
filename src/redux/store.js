import { combineReducers } from 'redux';
import contactReducer from './contacts-reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: rootReducer,
});

export default store;
