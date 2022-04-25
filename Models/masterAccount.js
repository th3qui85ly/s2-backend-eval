const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema({
  account_number: {type: Number, required: true},
  balance: {type: Number, require: true},
  createdAt: {type: Number, required: true},
  updatedAt: {type: Number, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
  branch_id: {type: mongoose.Schema.Types.ObjectId, ref: "branchDetail" },
  savingsAccount_id: {type: mongoose.Schema.Types.ObjectId, ref: "savingsAccount" },
  fixedAccount_id: {type: mongoose.Schema.Types.ObjectId, ref: "fixedAccount" },
});

module.exports = mongoose.model("MasterAccountDetails", masterAccountSchema);
