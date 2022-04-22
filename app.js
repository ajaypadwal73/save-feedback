require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const bodyParser = require("body-parser");

const feedback = require("./route/feedback");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", feedback);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});