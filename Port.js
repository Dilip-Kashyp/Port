const http = require('http');

const port = 8080; 

const server = http.createServer((req,res) => {
  res.end(`listening on port ${port}`); 
});

server.listen(port, () =>console.log(`Server listening port on ${port}`)
);