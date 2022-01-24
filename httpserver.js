const http = require('http');

const port = process.env.PORT  || 3000;   //run on PORT if enviroment variable is set otherwise on port 3000

const server = http.createServer((req,res)=>{         //req and res sre objects
    res.statusCode=200;    //response statuscode tells what happened with the response   200=ok   404=not found
    res.setHeader('Content-type','text/html')   //tells client the type of content server has sent
    res.end('<h1>hue hue hue</h1>'); //actual response
    console.log(req.url)    //prints url hitted by client
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})