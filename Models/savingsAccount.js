const mongoose = require("mongoose");

const savingsAccountSchema = new mongoose.Schema({
  account_number: {type: Number, require: true, unique: true},
  balance: {type: Number, require: true},
  interestRate: {type: Number, require: true},
  createdAt: {type: Number, require: true},
  updatedAt: {type: Number, require: true},
});

module.exports = mongoose.model("SavingsAccountDetails", savingsAccountSchema);
