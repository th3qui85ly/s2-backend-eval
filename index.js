const express = require("express");
const connectToDB = require("./DbConnection/mongodb");
const app = express();
app.use(express.json());


const PORT = 1912;

app.get("/", (req, res, next) => {
    res.send("Hello to homepage");
})

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server is running at port : ${PORT}`);
});


