// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import './interfaces/IFlashyToken.sol';
import './interfaces/IFlashyBorrower.sol';

contract FlashyToken is ERC20, IFlashyToken {
    uint initialSupply = 1000000000000000000000000;

    constructor() ERC20('Flashy', 'FLS') {
        _mint(msg.sender, initialSupply);
    }

    function borrow(uint amount) external override {
        _mint(msg.sender, amount);

        IFlashyBorrower(msg.sender).flashyCall(address(this), amount);

        _burn(msg.sender, amount);
    }
}
