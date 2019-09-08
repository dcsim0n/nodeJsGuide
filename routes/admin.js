/**
|--------------------------------------------------
| Learning Routes
| 2019 Dana Simmons
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();

router.get( '/add-product', ( req, res, next ) =>{
  console.log("Stuck in the middle");
  console.log(req.url);
  res.send('<form method="POST" action="/products"><input type="text" name="title" /><button type="submit">Add</button></form>');
})

router.post( '/products', ( req, res, next ) => {
  console.log("Products page");
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;