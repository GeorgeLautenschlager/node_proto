const http = require('http');
const { execSync } = require('child_process');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  const command = 'cd C:\\Users\\georg\\dev\\node_proto && code'

  let stdout = execSync(command);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  console.log(JSON.stringify({ command: command, result: stdout}));
  res.end(JSON.stringify({ command: command, result: stdout}));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});