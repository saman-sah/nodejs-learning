console.clear();
import express from 'express'

const app= express();

app.get("/route1", (req, res, next)=> {
    console.log("Get------A Get request recieved route1");
    next();
})

app.post("/route1", (req, res, next)=> {
    console.log("Post-------A post request recieved route1");
    next();
})

app.use("/route1", (req, res, next)=> {
    console.log("Use------A reguest recieved route 1");
    next();
})

app.all("/route1", (req, res, next)=> {
    console.log("All-----A request recived route1");
})

app.listen(3000, ()=> {
    console.log("server is running");
})