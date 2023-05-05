import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import store from './redux/store';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Auth0Provider 
          domain="dev-v2uelvzsns1ehvx3.us.auth0.com" 
          clientId="XDVQceyYxkdsJG0NhwIsmbpf97KXdqM3"
          authorizationParams={{ redirect_uri: window.location.origin }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
