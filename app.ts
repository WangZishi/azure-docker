import { createServer } from 'http';

const server = createServer((req, res) => {
    res.end('Hello world from Docker on Azure!');
});

server.listen(8080);
console.log('Server listening on port 8080.');