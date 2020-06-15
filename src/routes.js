const express = require("express");
const routes = express.Router();
const Calculadora = require("./controller");

routes.get("/tensao/:amperes/:ohms", Calculadora.tensao);
routes.get("/corrente/:volts/:ohms", Calculadora.corrente);
routes.get("/resistencia/:amperes/:volts", Calculadora.resistencia);

module.exports = routes;
