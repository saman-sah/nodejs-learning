console.clear();

import express from 'express'

const app= express();

app.use((req, res, next)=> {
    console.clear();
    next();
})


// app.get("/book",(req, res, next)=> {
//     res.send("A Get request recieved")
// })
// app.post("/book",(req, res, next)=> {
//     res.send("A post request recieved")
// })
// app.put("/book",(req, res, next)=> {
//     res.send("A put request recieved")
// })
// app.patch("/book",(req, res, next)=> {
//     res.send("A patch request recieved")
// })


app.route("/book")
    .get((req, res)=> {
        res.send("A Get request recieved")
    })
    .post((req, res)=> {
        res.send("A post request recieved")
    })
    .put((req, res)=> {
        res.send("A put request recieved")
    })
    .patch((req, res)=> {
        res.send("A patch request recieved")
    })


app.listen(3000);