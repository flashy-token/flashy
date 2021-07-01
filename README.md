# Flashy token

ERC20 Token that allows to borrow unlimited FLS without an external party.

## Addresses

-   _Kovan_ - 0x9eE4b63424369f9Cd02Cb17CC402235b520c4217
-   _Ropsten_ - 0x52da31Bd5c0fD2E270232b043eDF41DaB1C75f0C

## Usage

```sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface IFlashyToken is IERC20 {
    function borrow(uint amount) external;
}

interface IFlashyBorrower {
    function flashyCall(address token, uint amount) external;
}

contract MyArbitrage is IFlashyBorrower {
    address flashyToken;

    constructor(address _flashyToken) {
        flashyToken = _flashyToken;
    }

    function startFlashloan(uint amount) external {
        IFlashyToken(address(flashyToken)).borrow(amount);
    }

    function flashyCall(address token, uint amount) external override {
        // You have the requested amount of FLS on your account. Encode your logic here.
        // In the end, make sure you have the same amount of FLS left on the account, otherwise the transaction will fail.
    }
}
```
