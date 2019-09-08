/**
|--------------------------------------------------
| Learning Express Routes
| 2019 Dana Simmons
|--------------------------------------------------
*/

const express = require('express');




const router = express.Router();

router.get( '/', ( req, res, next ) =>{
  console.log("Stuck in the middle again");
  console.log(req.url);
  res.send("<h1>Hello World!</h1>");
})

module.exports = router;