/**
|--------------------------------------------------
| Dana Simmons 2019
|--------------------------------------------------
*/

const http = require('http');
const express = require('express');

const app = express();

app.use( ( req, res, next ) =>{
  console.log("Stuck in the middle");
  next();
})

app.use( ( req, res, next ) =>{
  console.log("Stuck in the middle again");
})
const server = http.createServer(app);

server.listen('3000');
