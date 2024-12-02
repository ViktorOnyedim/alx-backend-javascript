const http = require('node:http');

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Holberton School!');
});

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
})
