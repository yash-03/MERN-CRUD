const http = require("http");

const HOST = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write("Welcome to html!");
  res.end();
});

server.listen(PORT, HOST, () => {
  console.log(`server listen on ${HOST}:${PORT}`);
});
