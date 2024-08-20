import React, { useState } from "react";
import { connectWithWallet } from "../../utils/web3connection";
import "./Register.css";

const Register = () => {
	const userDataInitState = {
		name: "",
		email: "",
		password: "",
		address: "",
	};
	const [userData, setUserData] = useState(userDataInitState);
	//..web3..............v
	const accountChangeHandler = (account) => {
		setUserData({ ...userData, address: account });
	};
	//..web3..............^
	const sendInfo = async (event) => {
		event.preventDefault();
		await localStorage.setItem("userData", JSON.stringify(userData));
		setUserData(userDataInitState);
	};

	const onChangeText = ({ target }) => {
		setUserData({ ...userData, [target.name]: target.value });
	};

	return (
		<div className="register-screen">
			<form onSubmit={sendInfo}>
				<div className="field-container">{userData.address}</div>
				<div className="field-container">
					<input
						type="text"
						className="text-input"
						name="name"
						minLength={4}
						placeholder="Name"
						value={userData.name}
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
						value={userData.email}
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
						value={userData.password}
						onChange={onChangeText}
					/>
				</div>
				<div className="field-container">
					<button
						type="submit"
						className="button"
						onClick={() => connectWithWallet(accountChangeHandler)}
						disabled={userData.address}
					>
						<span className="button-text">
							{userData.address ? `Connected` : "Connect wallet"}
						</span>
					</button>
				</div>
				<div className="field-container">
					<button
						type="submit"
						className="button"
						disabled={
							!userData.password || !userData.email || !userData.address
						}
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
