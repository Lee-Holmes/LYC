var qs = require('querystring');
var url=require('url');

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

exports.doGet=doGet;