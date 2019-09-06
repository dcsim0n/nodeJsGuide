/**
|--------------------------------------------------
| Dana Simmons 2019
|--------------------------------------------------
*/

const http = require('http');



const handler = ( req, res ) =>{
  if( req.url === '/' ){
    res.write("<html><head><title>Hello</title></head><body><h1>Hello world</h1></body></html>");
    return res.end();
  }

  if ( req.url === '/users' ){
    res.write("<html><ol><li>Bob</li><li>Jill</li><li>Jane</li></ol></html>");
    return res.end();
  }
}

const server = http.createServer(handler);

server.listen('3000');
