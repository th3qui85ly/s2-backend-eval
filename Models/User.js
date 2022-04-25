const mongoose = require("mongoose");

const User = new mongoose.Schema({
    "userId": {type: mongoose.Schema.Types.ObjectId, ref: "masterAccount"},
    "firstName": {type: String, required: true},
    "middleName": {type: String},
    "lastName": {type: String, required: true},
    "age": {type: Number, required: true},
    "email": {type: String, required: true},
    "address": {type: String, required: true},
    "gender": {type: String, default: "Female"},
    "type": {type: String, default: "Customer"},
    "createdAt" : {type: Date, required: true, default: Date.now()},
    "updatedAt" : {type: Date, required: true, default: Date.now()}
})

module.exports = mongoose.model("User", User);