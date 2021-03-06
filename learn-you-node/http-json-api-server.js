const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  let [path, queryString] = req.url.split("?");
  if (req.method !== "GET") {
    return res.end("send a GET pls");
  }

  if (path === "/api/parsetime") {
    if (queryString) {
      res.writeHead(200, { "Content-Type": "application/json" });
      let date = new Date(queryString.split("=")[1]);
      let obj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };

      res.end(JSON.stringify(obj));
    }
  }

  if (path === "/api/unixtime") {
    if (queryString) {
      res.writeHead(200, { "Content-Type": "application/json" });
      let date = new Date(queryString.split("=")[1]);
      let obj = {
        unixtime: date.getTime(),
      };

      res.end(JSON.stringify(obj));
    }
  }
});

server.listen(process.argv[2]);

// ("use strict");
// const http = require("http");

// function parsetime(time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds(),
//   };
// }

// function unixtime(time) {
//   return { unixtime: time.getTime() };
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, "http://example.com");
//   const time = new Date(parsedUrl.searchParams.get("iso"));
//   let result;

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time);
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time);
//   }

//   if (result) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(result));
//   } else {
//     res.writeHead(404);
//     res.end();
//   }
// });
// server.listen(Number(process.argv[2]));
