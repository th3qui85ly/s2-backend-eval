const express = require("express");
const connectToDB = require("./DbConnection/mongodb");
const app = express();
app.use(express.json());

const PORT = 1912;

// all routes for the controllers 
const user = require('./Controllers/userController');
const branchDetail = require("./Controllers/branchController");
const masterAccount = require("./Controllers/masterController");
const savingsAccount = require("./Controllers/savingsController");
const fixedAccount = require("./Controllers/fixedController");

app.use("/user", user);
app.use("/branchDetail", branchDetail);
app.use("/masterAccount", masterAccount);
app.use("/savingsAccount", savingsAccount);
app.use("/fixedAccount", fixedAccount);


app.get("/", (req, res, next) => {
    res.send("Hello to homepage");
})

app.listen(PORT, async () => {
    await connectToDB();
    console.log(`Server is running at port : ${PORT}`);
});


