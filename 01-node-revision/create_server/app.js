

const http = require('http');



// Create PORT 
const PORT = process.env.PORT || 3000;



// create server 
const server = http.createServer((req, res) =>{
console.log("Request Object:", req);
    console.log(`Received request : ${req.method}  and url : ${req.url}`)
      res.writeHead(200,{"Content-type": 'text/html'});
    res.write('Hello Mehtab, This is a http server!');
    res.end('response end here!')
});




server.listen(PORT, () =>{
    console.log(`server is running on PORT : http://localhost:${PORT}`)
});
