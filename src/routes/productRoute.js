const express = require('express');
const app = express.Router();
const productcontroller = require('../controlers/productcontroller');

//1.
app.get("/",productcontroller.getProduct);

//2.
app.get("/:id",productcontroller.getProductById);

//3.
app.get("/name/:name",productcontroller.getProductByIdName);

//4.
app.get("/price/:price",productcontroller.getProductByIdPrice);

//5.
app.post("/",productcontroller.addProduct);

module.exports = app;