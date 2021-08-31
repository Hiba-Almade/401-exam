import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  

<Auth0Provider
domain="dev-126gsiqt.us.auth0.com"
clientId="g2xpqDbtgp8MmLgR9cwmi0Aqs2mHaFw5"
redirectUri={window.location.origin}
>
<React.StrictMode>
    <App />
  </React.StrictMode>,
</Auth0Provider>,
  document.getElementById('root')
);
