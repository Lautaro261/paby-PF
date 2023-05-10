import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-53hn8myh1vpyq17i.us.auth0.com"
    clientId="M2hd6vZ7GU0APIdU0oHKmryZGRGXvskf"
     authorizationParams={{ redirect_uri: window.location.origin }}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
