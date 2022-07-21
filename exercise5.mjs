import {createServer} from "node:http";

const server = createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","application/JSON")
    const responseJsonBody = JSON.stringify({location:"Mars"});
    res.end(responseJsonBody)
})

server.listen(3000,()=>{console.log("Server is listening at https://localhost:3000")});
/*
Using curl --verbose the content lenght of the response header is 19 chars.
*/