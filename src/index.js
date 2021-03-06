import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux persist for leveraging localStorage functionality
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);