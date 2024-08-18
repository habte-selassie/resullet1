import React, { useState } from "react";
import { userDataInitState } from "../../state/initialStates";
import "./Register.css";

const Register = () => {
	const [walletConnected, setWalletConnected] = useState(false);
	const [data, setData] = useState(userDataInitState);

	const lala = () => {};

	const connectWithWallet = async () => {
		const result = await lala();
		if (result.success) {
			setWalletConnected(true);
		}
	};

	const sendInfo = async (event) => {
		event.preventDefault();
		await localStorage.setItem("userData", JSON.stringify(data));
		setData(userDataInitState);
	};

	const onChangeText = ({ target }) => {
		setData({ ...data, [target.name]: target.value });
	};

	return (
		<div className="register-screen">
			<form onSubmit={sendInfo}>
				<div className="field-container">
					<input
						type="text"
						className="text-input"
						name="name"
						minLength={4}
						placeholder="Name"
						value={data.name}
						onChange={onChangeText}
					/>
				</div>
				<div className="field-container">
					<input
						type="email"
						name="email"
						className="text-input"
						minLength={10}
						placeholder="Email *"
						value={data.email}
						onChange={onChangeText}
					/>
				</div>
				<div className="field-container">
					<input
						type="password"
						name="password"
						className="text-input"
						minLength={8}
						placeholder="password *"
						value={data.password}
						onChange={onChangeText}
					/>
				</div>
				<div className="field-container">
					<button type="submit" className="button" onClick={connectWithWallet}>
						<span className="button-text">Connect wallet</span>
					</button>
				</div>
				<div className="field-container">
					<button
						type="submit"
						className="button"
						disabled={!data.password || !data.email || !walletConnected}
						onClick={sendInfo}
					>
						<span className="button-text">Register</span>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
