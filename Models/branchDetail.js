const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: {type: String, require: true},
  address: {type: String, require: true},
  ifsc: {type: String, require: true},
  micr: {type: Number, require: true},
  createdAt: {type: Number, require: true},
  updatedAt: {type: Number, require: true},
});

module.exports = mongoose.model("BranchDetails", branchSchema);
