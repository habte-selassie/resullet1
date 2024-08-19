Installation
Social Logins work as an extension to Magic SDK. To add Social Login to your Magic integration, start by installing the OAuth Extension:

NPM
Yarn

npm install magic-sdk @magic-ext/oauth
Initialization
When creating your Magic instance, you'll need to add an instance of OAuthExtension to the Magic constructor:

Web

import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

// Must use a Dedicated Wallet API Key
const magic = new Magic('YOUR_API_KEY', {
  extensions: [new OAuthExtension()],
});
Login
Once you've created a Magic instance, kick off the OAuth login with loginWithRedirect on the web and loginWithPopup on mobile.

Once logged in, you will have access to a DID token that can be used with our Admin SDK to verify the user's information and wallet address on the backend. On mobile SDKs, this is provided as the result of loginWithPopup, while on the web SDK you can retrieve this and other information about the OAuth result with getRedirectResult. The getRedirectResult function returns an object that includes user information. On mobile, you can get similar user info, such as wallet address and email, with getMetadata.

Javascript

// Assumes you've initialized a `Magic` instance with a Dedicated Wallet API Key
const beginOAuthFlow = () => {
  await magic.oauth.loginWithRedirect({
    provider: '...' /* 'google', 'facebook', 'apple', or 'github'   */,
    redirectURI: 'https://your-app.com/your/oauth/callback',
    scope: ['user:email'] /* optional */,
  });
}

// Call this upon redirect back to application
const handleOAuthResult = () => {
  const result = await magic.oauth.getRedirectResult();
  console.log(`OAuth result: ${result}`);

  // Handle result information as needed
}
The interface for the result of getRedirectResult is as follows:

Javascript

interface OAuthRedirectResult {
  magic: {
    idToken: string;
    userMetadata: MagicUserMetadata;
  },
  oauth: {
    provider: string;
    scope: string[];
    accessToken: string;
    userHandle: string;
    userInfo: ...;
  }
};
