
const fs = require('fs')
const http = require('http');

const port =process.env.PORT  ||3000;

const server = http.createServer((req,res)=>{       
    res.statusCode=200;   
    res.setHeader('Content-type','text/html') 
    console.log(req.url) 
    if(req.url == '/')
    {
        res.statusCode=200;
        res.end('<h1>hue hue hue</h1>');
    }
    else if(req.url == '/about')
    {
        res.statusCode=200;
        res.end('<h1>hue hue hue about</h1>');
    }
    else if(req.url == '/hello')
    {
        res.statusCode=200;
        const data =fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end('<h1>Not Found</h1>');
    }
})
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});



