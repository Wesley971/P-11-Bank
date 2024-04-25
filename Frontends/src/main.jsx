import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js'; // Assurez-vous que le chemin est correct
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.scss';
// Utilisez ReactDOM.createRoot pour le rendu de votre application
const root = createRoot(document.getElementById('root'));

// Enveloppez votre application dans Provider et utilisez StrictMode
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
