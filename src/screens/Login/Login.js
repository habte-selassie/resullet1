import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { supabase } from "@supabase/auth-ui-shared";

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

	const responseMessage = (response) => {
		console.log(response);
	};
	const errorMessage = (error) => {
		console.log("the error:", error);
	};

	return (
		<div className="login-page">
			<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

		</div>
	);
}