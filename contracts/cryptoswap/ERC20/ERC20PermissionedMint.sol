//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ERC20PermissionedMint is ERC20, ERC20Burnable, AccessControl {

    bytes32 public constant MINTER = keccak256("MINTER");
    /* ========== CONSTRUCTOR ========== */

    constructor(
        address _creator_address,
        string memory _name,
        string memory _symbol
    )
    ERC20(_name, _symbol)
    {
        _grantRole(DEFAULT_ADMIN_ROLE, _creator_address);
        _grantRole(MINTER, _creator_address);
    }


    /* ========== MODIFIERS ========== */

    modifier onlyAdmin() {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Only admin");
        _;
    }

    modifier onlyMinters() {
       require(hasRole(MINTER, msg.sender), "Only minters");
        _;
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    // Used by minters when user redeems
    function minter_burn_from(address b_address, uint256 b_amount) public onlyMinters {
        super.burnFrom(b_address, b_amount);
        emit TokenMinterBurned(b_address, msg.sender, b_amount);
    }

    // This function is what other minters will call to mint new tokens
    function minter_mint(address m_address, uint256 m_amount) public onlyMinters {
        super._mint(m_address, m_amount);
        emit TokenMinterMinted(msg.sender, m_address, m_amount);
    }

    // Adds whitelisted minters
    function addMinter(address minter_address) public onlyAdmin {
        require(minter_address != address(0), "Zero address detected");
        require(!hasRole(MINTER, minter_address), "Already granted minter role");

        _grantRole(MINTER, minter_address);
        emit MinterAdded(minter_address);
    }

    // Remove a minter 
    function removeMinter(address minter_address) public onlyAdmin {
        require(minter_address != address(0), "Zero address detected");
        require(hasRole(MINTER, minter_address), "Address doesn't have minter role");

        _revokeRole(MINTER, minter_address);

        emit MinterRemoved(minter_address);
    }

    /* ========== EVENTS ========== */

    event TokenMinterBurned(address indexed from, address indexed to, uint256 amount);
    event TokenMinterMinted(address indexed from, address indexed to, uint256 amount);
    event MinterAdded(address minter_address);
    event MinterRemoved(address minter_address);
}