const express = require("express");

const app = express();
app.use(express.json());

app.use("/calculadora", require("./src/routes"));

app.listen(3001);
