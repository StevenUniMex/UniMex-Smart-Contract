// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract wstUNX is ERC20 {

    uint256 constant supply = 1_000_000_000 ether;

    constructor() ERC20("Wrapped Staked UNX", "wstUNX") {
        _mint(msg.sender, supply);
    }

    function burn(uint256 value) external {
        _burn(msg.sender, value);
    }

}

