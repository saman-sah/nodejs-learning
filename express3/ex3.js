console.clear();

import express from 'express'

const app= express();

app.use(express.json());

app.post("/", (req, res)=> {
    res.json(req.body)
})

app.listen(3000)