console.clear();

import express from 'express'

const app= express();

app.use((req, res, next)=> {
    console.clear();
    next();
})

// Match with /user/1 , /user/2, /user/saman, ...
app.get("/user/:id",(req, res, next)=> {
    console.log("A request recieved to middleware 1");
    console.log(req.params);
    next();
})

// Match with /user/saman/book/12 , /user/ali/43, /user/sahar/98, ...
app.get("/user/:username/book/:bookId",(req, res, next)=> {
    console.log("A request recieved to middleware 2");
    console.log(req.params);
    next();
})

// Match with /file/readme.txt  
app.get("/file/:name.:ext",(req, res, next)=> {
    console.log("A request recieved to middleware 3");
    console.log(req.params);
    next();
})

// Match with /user/10-40
app.get("/users/:from-:to",(req, res, next)=> {
    console.log("A request recieved to middleware 4");
    console.log(req.params);
    next();
})

app.get("/users/:id(\\d{2,5})",(req, res, next)=> {
    console.log("A request recieved to middleware 5");
    console.log(req.params);
    next();
})

app.listen(3000);