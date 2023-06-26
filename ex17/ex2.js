console.clear();
import http from "http"

const server= http.createServer();

server.on("request", (req, res)=> {
    res.setHeader("Content-Type", "text/html");    
    res.setHeader("Header1", "Value1");    
    res.statusCode= 400;    
    res.statusMessage= "New Status Message"; 
    
    res.writeHead(200, "OK", {Header4: "value4"});
    res.write("Hello World! <br />")
    res.write("Hello World! <br />")
    res.end("Hello World! <br /><br />")
})

server.listen(3000, ()=> {
    console.log("listen");
})