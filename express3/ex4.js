console.clear();
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app= express();
const __dirname= path.dirname(fileURLToPath(import.meta.url))


app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=> {
    res.send(`
    <link rel="stylesheet" href="css/style.css"
    <form action="/result" method="post">
        <label> 3+ 4= ? </label><br />
        <input type="text" name="result" /><br />
        <button type="submit">Submit</button>
    `)
})

app.listen(3000)