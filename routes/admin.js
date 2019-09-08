/**
|--------------------------------------------------
| Learning Routes
| 2019 Dana Simmons
|--------------------------------------------------
*/

const express = require('express');
const path = require('path');
const router = express.Router();

router.get( '/add-product', ( req, res, next ) =>{
  console.log(req.url);
  res.sendFile(path.join( __dirname, '../', 'views', 'add-product.html' ));
})

router.post( '/add-product', ( req, res, next ) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;