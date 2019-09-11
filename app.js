/**
|--------------------------------------------------
| Dana Simmons 2019
|--------------------------------------------------
*/




const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const rootDir = require('./util/path');


const app = express();

app.set('view engine','pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( path.join( rootDir, 'public' ))); 

//Define routes
app.use( '/admin', adminRoutes );
app.use( shopRoutes );

//Handle invalid routes
app.use(( req, res, next ) => {
  res.status(404).sendFile(path.join( rootDir, 'views', '404.html'))
});

app.listen('3000');
