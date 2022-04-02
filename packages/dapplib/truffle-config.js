require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift renew stick arrow heavy another army gesture'; 
let testAccounts = [
"0xeec850bb1b3533a90592aecd5f38a290f59ea92c41122c8c51753892f5b39d6a",
"0x012841ad7e851bf7275d6971d42e2e27200a3f56014742de3a61bfa5e8dff3e9",
"0xa07a9d1c8fc3f6a9e6378530294230d85bea858bdbce1829a653ef3524bbc046",
"0x79306f7a2ac5c955a30dfe07e7aba841c951ef4760b92d800d6e68598d90a4b0",
"0xe63626bee63e309ef38a57941b3d0b19ceb11c67f9c0e420fe9682ba63123484",
"0xce721f43e7f8a1939fdb438a77cc4098b331ed7f4f897e7d7ec1f2e428301d30",
"0x887fcfc0651fcfaf77c60a194b334cc11a5754131b969110e41a925b90069b33",
"0xa932666bc902ccbb138751d8d14edbb1e388a0c14d4f6a8baf7293e3e457bc3a",
"0x4b01452e82093b57044e3fefdd631d8450906ad88e3e8e441dd35bf0696b0c6a",
"0xbed0799c265416b8d8e3c13d59608c1c87e9c5f47910ad1d79ccab335a44e40b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


