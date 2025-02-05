const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImg = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.end(homePage)
        console.log('Server hit..')
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.end('<h1>Welcome to about Page</h1>')
    }
    else if (req.url === '/styles.css')
    {
        res.writeHead(200, { 'content-type': 'text/css'})
        res.end(homeStyles)
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml'})
        res.end(homeImg)
    }
    else if (req.url === '/browser-app.js')
    {
        res.writeHead(200, { 'content-type': 'text/javascript'})
        res.end(homeLogic)
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html'})
        res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(5000)