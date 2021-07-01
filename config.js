const { config } = require('dotenv');

config();

module.exports = {
    privateKey: process.env.PRIVATE_KEY,
    infuraKey: process.env.INFURA_KEY,
    network: process.env.NETWORK,
    networkId: {
        kovan: 42,
        ropsten: 3,
        mainnet: 1
    }[process.env.NETWORK]
};
