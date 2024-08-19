// AuthComponent.js

import React from 'react';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

// Initialize Magic with OAuth Extension
const magic = new Magic('YOUR_API_KEY', {
  extensions: [new OAuthExtension()],
});

const AuthComponent = () => {
  // Function to initiate OAuth flow for a selected provider
  const handleLogin = async (provider) => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: provider, // e.g., 'google', 'facebook', 'apple', 'github'
        redirectURI: 'https://your-app.com/oauth/callback', // Your redirect URI
        scope: ['user:email'], // Optional, specify the scope
      });
    } catch (error) {
      console.error('OAuth login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login with Social Accounts</h2>
      <button onClick={() => handleLogin('google')}>Login with Google</button>
      <button onClick={() => handleLogin('facebook')}>Login with Facebook</button>
      <button onClick={() => handleLogin('apple')}>Login with Apple</button>
      <button onClick={() => handleLogin('github')}>Login with GitHub</button>
    </div>
  );
};

export default AuthComponent;
