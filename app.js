const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.end('Welcome to Home Page')
        return;
    }
    if (req.url === '/about') {
        res.end('Here is my about page')
        return;
    }
    res.end(`<h1>Oops! Page Not found </h1>`)
    return;
});

server.listen(3000);