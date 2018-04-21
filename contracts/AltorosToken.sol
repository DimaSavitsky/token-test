pragma solidity 0.4.23;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract AltorosToken is MintableToken {
    string public name;
    string public symbol;
    uint8 public decimals;

    function AltorosToken() public {
        name = "Altoros Token";
        symbol = "ALT";
        decimals = 18;
    }
}
