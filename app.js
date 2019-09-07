/**
|--------------------------------------------------
| Dana Simmons 2019
|--------------------------------------------------
*/

const http = require('http');
const userform = require('./userform');



const handler = ( req, res ) =>{
  if( req.url === '/' ){
    res.write( userform );
    return res.end();
  }

  if ( req.url === '/users' ){
    res.write("<html><ol><li>Bob</li><li>Jill</li><li>Jane</li></ol></html>");
    return res.end();
  }

  if ( req.url === '/create-user' ){
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    req.on('end', () => {
      const body1 = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
      console.log(body1);
    });
    return res.end()
  }

}

const server = http.createServer(handler);

server.listen('3000');
