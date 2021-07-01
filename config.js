const { config } = require('dotenv');

config();

module.exports = {
    privateKey: process.env.PRIVATE_KEY,
    infuraKey: process.env.INFURA_KEY,
    provider: {
        https: {
            'bsc-test': `https://data-seed-prebsc-1-s1.binance.org:8545/`,
            bsc: 'https://bsc-dataseed.binance.org/',
            kovan: `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`,
            ropsten: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`,
            mainnet: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
        }[process.env.NETWORK]
    },
    network: process.env.NETWORK,
    networkId: {
        'bsc-test': 97,
        bsc: 56,
        kovan: 42,
        ropsten: 3,
        mainnet: 1
    }[process.env.NETWORK]
};
