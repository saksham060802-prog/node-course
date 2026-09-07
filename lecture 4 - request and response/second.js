const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form>');
    res.write('<input type="text" name="username"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender">');
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});