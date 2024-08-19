// OAuthCallback.js

import React, { useEffect } from 'react';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

// Initialize Magic with OAuth Extension (you can reuse this instance)
const magic = new Magic('YOUR_API_KEY', {
  extensions: [new OAuthExtension()],
});

const handleOAuthResult = async () => {
  try {
    const result = await magic.oauth.getRedirectResult();
    console.log('OAuth result:', result);

    // Extract information from the result
    const { magic: { idToken, userMetadata }, oauth: { provider, accessToken, userInfo } } = result;

    // Handle the retrieved user info (e.g., store in your backend)
    console.log('User ID Token:', idToken);
    console.log('User Metadata:', userMetadata);
    console.log('OAuth Provider:', provider);
    console.log('OAuth Access Token:', accessToken);
    console.log('User Info:', userInfo);
  } catch (error) {
    console.error('Handling OAuth result failed:', error);
  }
};

const OAuthCallback = () => {
  useEffect(() => {
    handleOAuthResult();
  }, []);

  return <div>Processing your login...</div>;
};

export default OAuthCallback;
