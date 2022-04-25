const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose
        .connect(
        "mongodb+srv://admin:admin1912@cluster0.lewmd.mongodb.net/bank?retryWrites=true&w=majority"
        )
        .then(console.log("DB Connected"));
    } catch(err) {
        console.log(err);
    }
};