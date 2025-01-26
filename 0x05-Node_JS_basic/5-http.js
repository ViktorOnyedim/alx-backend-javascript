const http = require('node:http');
const countStudents = require('./3-read_file_async');
const db_path = process.argv[2];

const app = http.createServer((req, res) => {  
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is the list of our students\n');
    
    const count = countStudents(db_path)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(`${err.message}\n`);
      });
      console.log(count);
  }
});

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/}`);
});

module.exports = app;
