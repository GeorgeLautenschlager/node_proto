const http = require('http');
const spawn = require('child_process');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  const command = "vlc \"/run/user/1000/gvfs/afp-volume:host=LCARS.local,user=lautenschlager,volume=video/Shows/It's always Sunny in Philadelphia/Season 3/15 The Gang Dances Their Asses Off.avi\""

  let stdout = spawn.execSync(command);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  console.log(JSON.stringify({ command: command, result: stdout}));
  res.end(JSON.stringify({ command: command, result: stdout}));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});