const http = require('http');
const fs = require('fs');
const port =4444;

const server = http.createServer((req, res)=>{
    console.log(req.method);
    console.log(req.url);

    switch(true){
        case req.url ==="/" && req.method === "GET":
            fs.readFile("./views/index.html", (err, data) => {
                res.setHeader('Content-type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/filmek" && req.method ==="GET":
            fs.readFile('./data/filmek.json', (err, data) => {
                res.setHeader('Content-type', 'application/json');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url ==="/script.js" && req.method ==="GET":
            fs.readFile('./public/script.js', (err, data) => {
                res.setHeader('Content-type', 'application/json');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url==="/bootstrap.min.css" && req.method ==="GET":
            fs.readFile('./dist/css/bootstrap.min.css', (err, data) => {
                res.setHeader('Content-Type','text/css');
                res.writeHead(200);
                res.end(data);
            });
            break;
            
            
            default:
                fs.readFile('./views/hiba.html', (err, data) => {
                    res.setHeader('Content-type', 'text/html');
                    res.writeHead(404);
                    res.end(data);
                });
                break;
    }
})

server.listen(port, () => {
    console.log("megy");
})