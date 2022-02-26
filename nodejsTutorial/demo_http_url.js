var http = require('http');
http.createServer(function (req, res) {
  console.log('req', req);
  console.log('res', res);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);