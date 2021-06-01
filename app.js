const http = require('http');
var url = require('url');
var qs = require('querystring');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if(req.method == "GET"){
    doGet(req,res);
    res.end();
  }else if(req.method == "POST"){
    doPost(req,res);
    res.end();
  }else{
    res.end();
  }
})

function doGet(req,res) {
  var obj=qs.parse(url.parse(req.url).query);
  console.log(obj);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write("<head><title>xiake</title></head>");
  res.write('<body>');
  res.write('<form method="post">');
  res.write('username:<input name="username"></br>');
  res.write('password:<input name="password" type="password"></br>');
  res.write('<input type="submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  res.end();
}

function doPost(req,res){
  var formData='';
  req.on('data',function (data){
    formData+=data;

  });
  req.on('end',function () {
    var obj=qs.parse(formData);
    console.log(obj);
    res.end();
  })
}
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});