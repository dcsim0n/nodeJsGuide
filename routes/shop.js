/**
|--------------------------------------------------
| Learning Express Routes
| 2019 Dana Simmons
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');




router.get( '/', ( req, res, next ) =>{
  res.render('shop', {path: "/"});
})

module.exports = router;