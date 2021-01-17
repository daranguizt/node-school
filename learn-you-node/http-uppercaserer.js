const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
    console.log(req.method);
    if(req.method !== 'POST'){
       return res.end('send a post');
    }

    req.pipe(map((chunk) => {return chunk.toString().toUpperCase()})).pipe(res);
})

server.listen(process.argv[2]);