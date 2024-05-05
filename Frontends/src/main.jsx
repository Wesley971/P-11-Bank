import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store} from './redux/store.js'; // Assurez-vous que le chemin est correct
import App from './App.jsx';
import './index.scss';
// Utilisez ReactDOM.createRoot pour le rendu de votre application
const root = createRoot(document.getElementById('root'));

// Enveloppez votre application dans Provider et utilisez StrictMode
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
      
    </Provider>
  </React.StrictMode>
);
