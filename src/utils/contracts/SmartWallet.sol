// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

interface IERC20 {
    
    function transfer(address to, uint amt) external returns (bool);

    function approve(address spender, uint amt) external returns (bool);

    function transferFrom(address from, address to, uint amt) external returns (bool);

    function balanceOf(address _account) external view returns (uint);
}

contract BasicSmartWallet {
    
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
    constructor(address _owner) {
        owner = _owner;
    }

    function deposit() external payable {}

    function executeTransaction(address payable to, uint256 value, bytes calldata data) external onlyOwner {
        (bool success, ) = to.call{value: value}(data);
        require(success, "Transaction failed");
    }

    receive() external payable {}

    function withdrawERC20Token(IERC20 token, address to, uint256 amount) external onlyOwner {
        require(token.transfer(to, amount), "Token transfer failed");
    }

    function approveToken(IERC20 token, address spender, uint256 amount) external onlyOwner {
        require(token.approve(spender, amount), "Token approve failed");
    }
}

// tx hash 0xb267c09f0f701d6756d092fc6e925436d2d297b2d7a2222222a19b183b95d88d
// contract address 0x259a67a4ecfc8c836a26cd4531bdb23c4fe54117