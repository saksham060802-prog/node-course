const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<title>Myntra</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<header>');
    res.write('<nav>');
    res.write('<ul>');
    res.write('<li><a href="/home">Home</a></li>');
    res.write('<li><a href="/men">Men</a></li>');
    res.write('<li><a href="/women">Women</a></li>');
    res.write('<li><a href="/kids">Kids</a></li>');
    res.write('<li><a href="/cart">&#128722;</a></li>');
    res.write('</ul>');
    res.write('</nav>');
    res.write('</header>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});