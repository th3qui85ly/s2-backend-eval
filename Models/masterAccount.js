const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema({
  balance: {type: Number, require: true},
  createdAt: {type: Number, required: true},
  updatedAt: {type: Number, required: true},
});

module.exports = mongoose.model("MasterAccountDetails", masterAccountSchema);
