const mongoose = require("mongoose");

const User = new mongoose.Schema({
    "userId": {type: mongoose.Schema.Types.ObjectId, ref: "masterAccount", required: true},
    "firstName": {type: String, required: true},
    "middleName": {type: String},
    "lastName": {type: String, required: true},
    "age": {type: Number, required: true},
    "email": {type: String, required: true},
    "address": {type: String, required: true},
    "gender": {type: String, default: "Female"},
    "type": {type: String, default: "Customer"},
    "createdAt" : {type: Date, required: true},
    "updatedAt" : {type: Date, required: true}
})

module.exports = mongoose.model("User", User);