import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import exportedStore from './redux/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={exportedStore.store}>
      <PersistGate loading={null} persistor={exportedStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
