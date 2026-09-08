const sumCalculator = (req, res, next) => {
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObject = Object.fromEntries(params.entries());
    
    const num1 = Number(bodyObject.first);
    const num2 = Number(bodyObject.second);
    const result = num1 + num2;

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator Result</title></head>');
    res.write('<body>');
    res.write(`<h1>The Result is ${result}</h1>`);
    res.write('<a href="/calculator">Calculate Again</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  });
};

module.exports = sumCalculator;