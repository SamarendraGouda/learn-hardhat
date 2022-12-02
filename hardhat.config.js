/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");

 const ALCHEMY_API_KEY = "Tv277_RjwkXDuii_WGiG_X8RL-T56yyG";
 const ROPSTEN_PRIVATE_KEY =
   "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6";
 module.exports = {
   solidity: "0.8.17",
 
   networks: {
     ropsten: {
       url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
       accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
     },
   },
 }