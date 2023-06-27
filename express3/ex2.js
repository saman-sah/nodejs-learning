console.clear();
import express from 'express'

const app= express();

app.get('/',(req,res)=>{
    // res.send(req.query)
    // res.send("Hello")
    res.json("Hello")
})

app.listen(3000)