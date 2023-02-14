const http = require('http');
const PORT = process.env.PORT || 8081;

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write("Hello World");
  res.end();
});

server.listen(PORT, function() {
  console.log(`server started on port ${PORT}`);
});
