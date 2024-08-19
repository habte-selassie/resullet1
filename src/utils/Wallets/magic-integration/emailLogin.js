import React, { useState } from 'react';
import { Magic } from 'magic-sdk';

const magic = new Magic('PUBLISHABLE_API_KEY');

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [authStatus, setAuthStatus] = useState('');
  const [otp, setOtp] = useState('');
  
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);

  const loginWithEmailOTP = async () => {
    try {
      // Initiate the login flow with email OTP
      const handle = magic.auth.loginWithEmailOTP({ 
        email: email, 
        showUI: false, 
        deviceCheckUI: true 
      });

      handle
        .on('email-otp-sent', () => {
          setAuthStatus('OTP sent to email. Please enter the OTP.');
        })
        .on('invalid-email-otp', () => {
          setAuthStatus('Invalid OTP. Please try again.');
        })
        .on('done', async (result) => {
          setAuthStatus('Login complete!');
          const didToken = result;
          // Display wallet UI components
          await magic.wallet.showAddress();
          await magic.wallet.showSendTokensUI();
          await magic.wallet.showBalances();
          await magic.wallet.showNFTs();
          await magic.wallet.showOnRamp();
          console.log('DID Token:', didToken);
        })
        .on('error', (reason) => {
          setAuthStatus(`Error: ${reason}`);
        })
        .on('settled', () => {
          // Optional: Handle when the Promise settles
        })
        .on('device-needs-approval', () => {
          setAuthStatus('New device detected. Please approve.');
        })
        .on('device-verification-email-sent', () => {
          setAuthStatus('Device verification email sent.');
        })
        .on('device-approved', () => {
          setAuthStatus('Device approved. Please retry login.');
        })
        .on('device-verification-link-expired', () => {
          setAuthStatus('Device verification link expired. Please retry.');
          handle.emit('device-retry');
        });

      // Verify OTP
      handle.emit('verify-email-otp', otp);

    } catch (err) {
      if (err instanceof RPCError) {
        switch (err.code) {
          case RPCErrorCode.MagicLinkExpired:
            setAuthStatus('Magic link expired. Please request a new one.');
            break;
          case RPCErrorCode.UserAlreadyLoggedIn:
            setAuthStatus('User already logged in.');
            break;
          default:
            setAuthStatus(`Error: ${err.message}`);
        }
      } else {
        setAuthStatus(`Unexpected error: ${err.message}`);
      }
    }
  };

  const logout = async () => {
    try {
      await magic.user.logout();
      setAuthStatus('Logged out successfully.');
    } catch (err) {
      setAuthStatus(`Logout error: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Magic Authentication</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={loginWithEmailOTP}>Login with Email OTP</button>
      {authStatus && <p>{authStatus}</p>}
      {authStatus === 'Login complete!' && <button onClick={logout}>Logout</button>}
      {authStatus === 'OTP sent to email. Please enter the OTP.' && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
        />
      )}
    </div>
  );
};

export default AuthComponent;
