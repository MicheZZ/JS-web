const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  const name = queryObject.name || 'Recruto';
  const message = queryObject.message || 'Давай дружить';
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end(`Hello ${name}! ${message}!`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
