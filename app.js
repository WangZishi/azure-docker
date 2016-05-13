"use strict";
var http_1 = require('http');
var server = http_1.createServer(function (req, res) {
    res.end('Hello world from Docker on Azure!');
});
server.listen(8080);
console.log('Server listening on port 8080.');
//# sourceMappingURL=app.js.map