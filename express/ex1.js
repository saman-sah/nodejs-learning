console.clear();
import express from 'express';

const app= express();

app.use("/test", (req, res)=> {
    console.log("Another request received");
    console.log(req.url, req.method);
    res.send("Hello from /test");
})

app.use("/", (req, res)=> {
    console.log("A request received.");
    console.log(req.url, req.method);
    res.send("Hello from /")
});


app.listen(3000, ()=> {
    console.log("Server is running on http://localhost:3000")
})