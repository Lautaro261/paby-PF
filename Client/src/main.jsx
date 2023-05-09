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
     domain="dev-8ny4xgus1d2dhwt3.us.auth0.com"
     clientId="4HfEvEmzf9RmOQltRKrxNquTU1FWUQZI"
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
