import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { supabase } from "@supabase/auth-ui-shared";
import { Navigate } from "react-router-dom";
import LinkedInOAuth from "./linkedInLogin";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

import "./Login.css";
// import ConnectButton from "Wallets/walletConnect-integration/walletConnect";
//import { supabase } from '../supabaseClient';

// Import the Supabase client

async function createNonce() {
	const nonce = btoa(
		String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))
	);
	const encoder = new TextEncoder();
	const encodedNonce = encoder.encode(nonce);
	const hashBuffer = await crypto.subtle.digest("SHA-256", encodedNonce);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashedNonce = hashArray
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
	return { nonce, hashedNonce };
}

export default function Login() {
	const [nonce, setNonce] = useState("");

	useEffect(() => {
		async function generateNonce() {
			const { nonce } = await createNonce();
			setNonce(nonce); // Set the nonce in the state
		}

		generateNonce();
	}, []);

	async function handleSignInWithGoogle(response) {
		const { data, error } = await supabase.auth.signInWithIdToken({
			provider: "google",
			token: response.credential,
			nonce: nonce,
		});

		if (error) {
			console.error("Error signing in with Google:", error);
		} else {
			console.log("Signed in successfully:", data);
		}
	}

	useEffect(() => {
		window.handleSignInWithGoogle = handleSignInWithGoogle; // Expose the function to the global scope
	}, []);

	const responseMessage = async (response) => {
		await localStorage.setItem("gLoginData", JSON.stringify(response));
		<Navigate to="/resume" />;
	};
	const errorMessage = (error) => {
		console.log("the error:", error);
	};

	const { linkedInLogin } = useLinkedIn({
		clientId: process.env.LINKEDIN_CLIENT_ID,
		redirectUri: process.env.LINKEDIN_CALLBACK_URL, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
		// redirectUri: "http://localhost:3000/auth/linkedin/callback", // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
		onSuccess: (code) => {
			console.log(code);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	return (
		<div className="login-page">
			<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
			{/* <img
				onClick={linkedInLogin}
				src={linkedin}
				alt="Sign in with Linked In"
				style={{ paddingTop: "20px", maxWidth: "180px", cursor: "pointer" }}
			/> */}
			<LinkedInOAuth />
			{/* <div
				className="g_id_signin"
				data-type="standard"
				data-shape="pill"
				data-theme="filled_blue"
				data-text="signin_with"
				data-size="large"
				data-logo_alignment="left"
			></div> */}
		</div>
	);
}