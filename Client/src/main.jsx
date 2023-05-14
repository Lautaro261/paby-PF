import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-csn8fa2s8p4j2ruw.us.auth0.com"
    clientId="DB5pEkCHUEZkbUIKzaXPyR8cbAHUGUsy"
     authorizationParams={{ redirect_uri: window.location.origin }}>
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>    
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
