const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  hash: String,
  tokenName: String,
  tokenSymbol: String,
  contractAddress: String,
  hash: String,
  deployer: String,
  pair: String,
  verified: Boolean,
});

module.exports = mongoose.model("hashstore", schema);
