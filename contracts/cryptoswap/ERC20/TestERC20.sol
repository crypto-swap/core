// SPDX-License-Identifier: MIT
import "./ERC20PermissionedMint.sol";

pragma solidity ^0.8.0;

contract TestERC20 is ERC20PermissionedMint {

    uint256 constant genesis_supply = 100000000e18;

    constructor (
      address _creator_address
    )
    ERC20PermissionedMint(_creator_address, "CryptoSwap Test Token", "CST")
    {
      _mint(_creator_address, genesis_supply);
    }
}