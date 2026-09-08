const fs = require('fs');

const userRequestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');
    res.write('<h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } 
  
  else if (url.toLowerCase() === "/submit-details" && method === "POST") {
    const body = [];
    
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      
      const params = new URLSearchParams(parsedBody);
      const bodyobject = Object.fromEntries(params.entries());
      console.log(bodyobject);
      
      fs.writeFileSync('user.txt', parsedBody);

      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
    
    return;
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  return res.end();
};

module.exports = userRequestHandler;