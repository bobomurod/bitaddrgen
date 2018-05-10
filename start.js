const bitcore = require('bitcore-lib')
const bitcoreEth = require('bitcore-lib')

const EthereumBip44 = require('ethereum-bip44')
var privateKey = new bitcore.PrivateKey()
console.log(privateKey)
var address = privateKey.toAddress()
console.log(address)
console.log("____________________________________________________")


const bitcore_ltc = require('bitcore-litecoin')
var privateKey_ltc = new bitcore_ltc.PrivateKey()
console.log(privateKey_ltc)
var address = privateKey_ltc.toAddress()
console.log(address)
console.log("____________________________________________________")



var ethkey = bitcoreEth.HDPrivateKey()
console.log("ethkey")
console.log(ethkey)
var ethWallet = new EthereumBip44(ethkey)
console.log("Bip44 Eth wallet addr from ethkey")
console.log(ethWallet.getAddress(0))
console.log(ethWallet.getAddress(1))