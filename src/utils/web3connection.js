import { ethers, formatEther } from "ethers";

export const getbalance = (address, callback) => {
	window.ethereum
		.request({
			method: "eth_getBalance",
			params: [address, "latest"],
		})
		.then((balance) => {
			callback(formatEther(balance));
		});
};

export const connectWithWallet = (callback) => {
	if (window.ethereum) {
		window.ethereum
			.request({ method: "eth_requestAccounts" })
			.then((res) => callback(res[0]));
	} else {
		alert("install metamask extension!!");
	}
};
