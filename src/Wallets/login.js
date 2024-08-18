import React, { useEffect, useState } from 'react';

import { supabase } from '@supabase/auth-ui-shared'

//import { supabase } from '../supabaseClient';


  // Import the Supabase client

async function createNonce() {
  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))));
  const encoder = new TextEncoder();
  const encodedNonce = encoder.encode(nonce);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return { nonce, hashedNonce };
}

export default function Login() {
  const [nonce, setNonce] = useState('');

  useEffect(() => {
    async function generateNonce() {
      const { nonce } = await createNonce();
      setNonce(nonce);  // Set the nonce in the state
    }

    generateNonce();
  }, []);

  async function handleSignInWithGoogle(response) {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential,
      nonce: nonce,
    });

    if (error) {
      console.error('Error signing in with Google:', error);
    } else {
      console.log('Signed in successfully:', data);
    }
  }

  useEffect(() => {
    window.handleSignInWithGoogle = handleSignInWithGoogle;  // Expose the function to the global scope
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <div id="g_id_onload"
           data-client_id="resullet"
           data-context="signin"
           data-ux_mode="popup"
           data-callback="handleSignInWithGoogle"
           data-nonce={nonce}
           data-auto_select="true"
           data-itp_support="true"
           data-use_fedcm_for_prompt="true">
      </div>

      <div className="g_id_signin"
           data-type="standard"
           data-shape="pill"
           data-theme="filled_blue"
           data-text="signin_with"
           data-size="large"
           data-logo_alignment="left">
      </div>
    </div>
  );
}


//import { supabase } from '@supabase/auth-ui-shared'
// import React, { useEffect, useState } from 'react'
// import { supabase } from '../supabaseClient';

// // Function to create the nonce and hashed nonce
// async function createNonce() {
//   const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
//   const encoder = new TextEncoder();
//   const encodedNonce = encoder.encode(nonce);
//   const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce);
//   const hashArray = Array.from(new Uint8Array(hashBuffer));
//   const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  
//   return { nonce, hashedNonce };
// }

// export default function Login() {
//   const [nonce, setNonce] = useState('');

//   useEffect(() => {
//     async function generateNonce() {
//       const { nonce, hashedNonce } = await createNonce();
//       setNonce(nonce);  // Set the nonce in the state
//       // You can also use the hashedNonce for security purposes
//     }

//     generateNonce();
//   }, []);

//   async function handleSignInWithGoogle(response) {
//     const { data, error } = await supabase.auth.signInWithIdToken({
//       provider: 'google',
//       token: response.credential,
//       nonce: nonce,  // Use the nonce here
//     });

//     if (error) {
//       console.error('Error signing in with Google:', error);
//     } else {
//       console.log('Signed in successfully:', data);
//     }
//   }

//   useEffect(() => {
//     window.handleSignInWithGoogle = handleSignInWithGoogle;  // Expose the function to the global scope
//   }, []);

//   return (
//     <div>
//       <h1>Login</h1>

//       <h1>
             
//                       Resullet
             
//              // Security Issues
             
//              // Project Status
             
//              // Connect
//              // Welcome to your new project
//              // Your project has been deployed on its own instance, with its own API all set up and ready to use.
             
//              // Get started by building out your database
//              // Start building your app by creating tables and inserting data. Our Table Editor makes Postgres as easy to use as a spreadsheet, but there's also our SQL Editor if you need something more.
             
//              // Table Editor
             
             
//              //         </h1> 

//       <div id="g_id_onload"
//            data-client_id="resullet"
//            data-context="signin"
//            data-ux_mode="popup"
//            data-callback="handleSignInWithGoogle"
//            data-nonce={nonce}  // Set the nonce here
//            data-auto_select="true"
//            data-itp_support="true"
//            data-use_fedcm_for_prompt="true">
//       </div>
//       <div className="g_id_signin"
//            data-type="standard"
//            data-shape="pill"
//            data-theme="filled_blue"
//            data-text="signin_with"
//            data-size="large"
//            data-logo_alignment="left">
//       </div>
//     </div>
//   );
// }


// import { supabase } from '@supabase/auth-ui-shared'
// import React from 'react'


// // Adapted from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string

// const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
// const encoder = new TextEncoder();
// const encodedNonce = encoder.encode(nonce);
// crypto.subtle.digest('SHA-256', encodedNonce).then((hashBuffer) => {
//     const hashArray = Array.from(new Uint8Array(hashBuffer))
//     const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
//   })


//   // Use 'hashedNonce' when making the authentication request to Google
//   //    Use 'nonce' when invoking the supabase.auth.signInWithIdToken() method

//   async function handleSignInWithGoogle(response) {
//     const { data, error } = await supabase.auth.signInWithIdToken({
//         provider: 'google',
//         token: response.credential,
//         nonce: '<NONCE>',
      
//     })
// }

// export default function login() {

  

    

//   return (
//     <div>login

//         <h1>
             
//         Resullet

// Security Issues

// Project Status

// Connect
// Welcome to your new project
// Your project has been deployed on its own instance, with its own API all set up and ready to use.

// Get started by building out your database
// Start building your app by creating tables and inserting data. Our Table Editor makes Postgres as easy to use as a spreadsheet, but there's also our SQL Editor if you need something more.

// Table Editor


//         </h1>

// <div id="g_id_onload"
//      data-client_id="resullet"
//      data-context="signin"
//      data-ux_mode="popup"
//      data-callback="handleSignInWithGoogle"
//      data-nonce=""
//      data-auto_select="true"
//      data-itp_support="true"
//      data-use_fedcm_for_prompt="true">
// </div>

// <div class="g_id_signin"
//      data-type="standard"
//      data-shape="pill"
//      data-theme="filled_blue"
//      data-text="signin_with"
//      data-size="large"
//      data-logo_alignment="left">
// </div>

//     </div>
//   )
// }
