import { createServer } from 'node:http';
import * as fs from 'node:fs';

const server = createServer((req, res) => {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(8080);
