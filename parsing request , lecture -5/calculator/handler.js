const sumCalculator = require('./sum.js');

const requesthandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator Home</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to the Calculator App</h1>');
    res.write('<a href="/calculator">Go to Calculator</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } 
  
  else if (url === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator Form</title></head>');
    res.write('<body>');
    res.write('<h1></h1>');
    res.write('<form action="/calculate-result" method="POST">');
    res.write('<input type="number" name="first" placeholder="First Number" required><br>');
    res.write('<input type="number" name="second" placeholder="Second Number" required><br>');
    res.write('<button type="submit">Sum</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } 
  
  else if (url.toLowerCase() === "/calculate-result" && method === "POST") {
    return sumCalculator(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>404</title></head>');
  res.write('<body><h1>Page Not Found</h1></body>');
  res.write('</html>');
  return res.end();
};

exports.requesthandler = requesthandler;