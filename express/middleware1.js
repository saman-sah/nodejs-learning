console.clear();

import express from 'express'

const app= express();

app.use("/rout1", (req, res, next)=> {
    console.log("Hello from first Route1");
    res.send("Hello from first Route1")
})

app.use("/route1", (req, res)=> {
    console.log("Hello from second Route1");
    res.send("Hello from second Route1");
})

app.use("/route2", (req, res)=> {
    console.log("Hello from Route2");
    res.send("Hello from Route2");
})

app.use("/", (req, res)=> {
    console.log("Hello from /");
    res.send("Hello from /");
})

app.listen(3000, ()=> {
    console.log("Server is running on http://localhost:3000")
})