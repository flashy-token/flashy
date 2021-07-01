const FlashyToken = artifacts.require('FlashyToken');

module.exports = function (_deployer) {
    _deployer.deploy(FlashyToken);
};
