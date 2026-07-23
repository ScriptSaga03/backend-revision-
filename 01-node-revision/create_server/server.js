

const http = require('http');




// create PORT number from environment variable or default to 3000

const PORT = process.env.PORT || 3000;


// create server 
const server = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-type": 'text/html'});
    res.write('Hello World, \n This is a simple HTTP server!');
    res.end();
});

server.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`)
});
