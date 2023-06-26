console.clear();
import http from 'http'

const server= http.createServer(()=> {
    console.log("A request received");
})

server.on("request", (req, res)=> {
    res.write("Hello World");
    res.end();
})

server.listen(3000, ()=> {
    console.log("recievedddddddddd");
})