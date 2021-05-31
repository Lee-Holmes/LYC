const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
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
	res.write("successed!");
}
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});