/**
|--------------------------------------------------
| Dana Simmons 2019
|--------------------------------------------------
*/

const express = require('express');

const app = express();

app.use( '/add-product', ( req, res, next ) =>{
  console.log("Stuck in the middle");
  console.log(req.url);
  res.send("<h1>Add Product page</h1>")
})

app.use( '/', ( req, res, next ) =>{
  console.log("Stuck in the middle again");
  console.log(req.url);
  res.send("<h1>Hello World!</h1>");
})

app.listen('3000');
