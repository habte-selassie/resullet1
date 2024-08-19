// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import  "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract Resume is ERC721URIStorage, Ownable {

  constructor(address initialOwner) ERC721("NFTResume", "NFTR") Ownable(initialOwner) {}

  function mint(address _to, uint256 _tokenId, string calldata _uri) external onlyOwner {
      _mint(_to, _tokenId);
      _setTokenURI(_tokenId, _uri); 
  }

}
//contract addr 0x512cb176339bea7bdbd3e29b4fdf5ca0dc8f4f81
//tx hash 0xf7f884846b374533B504F85f46F2088501339d82