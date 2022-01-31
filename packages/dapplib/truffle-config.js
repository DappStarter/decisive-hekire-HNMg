require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember arrow hidden entire off gasp'; 
let testAccounts = [
"0xe75de4a27b3d57989c0b97dfaabf969e578ce1aa65633b2f26c4a216c7d7549b",
"0x40dd1b582771dd36dbf0e39461478c6ea27ba68cf88acf8749a75f0e1e57bcc6",
"0xbd0b0c74d58f9ccd9d4c424c666628494d69bc1db8c6597767be0e0a42f5bf76",
"0x43625c953279c215d05dd1a6fc9040d776f8fc3685e120a78c6f6b4cdf22ff36",
"0xfbfa47fbfa04007a024248ddc8daae73e21cc739fb37da5479a06494b7b78e54",
"0xee7ad3a847e806ebdd34099b19855d65b1657964d213f0ce6d267d9d7b53bdec",
"0x7c42fbdf5f95099f84b4e7bcc35d701aebe75d76e38b6fb3fc42fa353fee9a7d",
"0x6cd64c2f506f6ad54d337d77293f06898b40ab94265730c4eac38f5610c41c6a",
"0xd467ea469262d6ad06637671b9eb45efc921c541650f4dc2f97bb1a5c11e3660",
"0xc3bd5d4058cc914b15831f4749ef0abbf492afd77420b42cc1ed036f1f644a1c"
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


