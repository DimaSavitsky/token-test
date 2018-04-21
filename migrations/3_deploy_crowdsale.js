var AltorosCrowdsale = artifacts.require("./AltorosCrowdsale.sol");
var AltorosToken = artifacts.require("./AltorosToken.sol");

module.exports = function(deployer, networks, accounts) {
    const openingTime = web3.eth.getBlock('latest').timestamp + 10;
    const closingTime = openingTime + 60 * 60 * 24 * 31;
    const rate  = new web3.BigNumber('1000');
    const wallet = accounts[2];

    deployer.deploy(
        AltorosCrowdsale,
        openingTime,
        closingTime,
        rate,
        wallet,
        AltorosToken.address
    );
};
