const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const command = req.url.split('/')[1];

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(command == 'node_proto') {
    nodeProto();

    res.statusCode = 200;
    res.end('Command Received: "' + command + '".\n');
  }
  else if(command == 'commbadge') {
    commbadge();

    res.statusCode = 200;
    res.end('Command Received: "' + command + '".\n');
  }
  else {
    res.statusCode = 404;

    res.end('Command not recognized');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function nodeProto() {
  console.log("Routing command to PS Runner");
  var get_options = {
    host: 'localhost',
    port: '4000',
    path: '',
    method: 'GET',
    headers: {}
  };

  var get_req = http.request(get_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
  });

  get_req.end();
}

function commbadge() {
  console.log("Routing Command to commbadge");
  var get_options = {
    host: 'localhost',
    port: '4000',
    path: '',
    method: 'GET',
    headers: {}
  };

  var get_req = http.request(get_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
  });

  get_req.end();
}