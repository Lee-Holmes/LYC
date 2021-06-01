const http = require('http');
var get=require('./httpGet');
var post=require('./httpPost');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if(req.method == "GET"){
    get.doGet(req,res);
    res.end();
  }else if(req.method == "POST"){
    post.doPost(req,res);
    res.end();
  }else{
    res.end();
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});