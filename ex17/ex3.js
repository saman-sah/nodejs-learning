console.clear();
import http from "http";

const server = http.createServer();

server.on("request", (req, res)=> {
    if(req.url=== "/") {
        res.end("Home Page");        
    }else if(req.url=== "/about") {
        res.end("About Page");
    }else {
        res.end("Page Not Found");
    }
})

server.listen(3000, ()=> {
    console.log("lisen");
})