const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: {type: String, require: true},
  address: {type: String, require: true},
  IFSC: {type: String, require: true},
  MICR: {type: Number, require: true},
  createdAt: {type: Number, require: true, default: Date.now()},
  updatedAt: {type: Number, require: true, default: Date.now()},
});

module.exports = mongoose.model("BranchDetails", branchSchema);
