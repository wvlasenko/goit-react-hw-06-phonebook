import { combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  // contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

// const store = configureStore({
//   reducer: rootReducer,
// });

export default store;
