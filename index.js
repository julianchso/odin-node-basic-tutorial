import { createServer } from 'node:http';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer(async (req, res) => {
  if (req.method === 'GET') {
    let filePath;
    if (req.url === '/' || req.url === '/index.html') {
      filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about.html') {
      filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact-me.html') {
      filePath = path.join(__dirname, 'contact-me.html');
    } else {
      filePath = path.join(__dirname, '404.html');
    }

    const data = await fs.readFile(filePath);
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  }
});

server.listen(PORT);
