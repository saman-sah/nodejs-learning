console.clear();

import express from 'express'

const app= express();


function getTime(req, res, next) {    
    let startTime= new Date();
    next();
    let endTime= new Date();
    let duration= endTime - startTime;
    console.log(duration);
}

function addHeader(req, res, next) {
    res.setHeader("Add-New-Header", "New Header Value")
    next();
}

app.use(getTime)
app.use(addHeader)


app.use("/", (req, res)=> {
    let arr=[]
    for(let i=0; i< 10000; i++) {
        arr.unshift(i)
    }
    res.send(arr)
})

app.listen(3000, ()=> {
    console.log("Server is running");
})