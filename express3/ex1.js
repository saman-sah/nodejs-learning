console.clear();
import express from 'express'
const app= express();

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=> {
    res.send(`
    <form action="/result" method="post">
        <label> 3+ 4= ? </label><br />
        <input type="text" name="result" /><br />
        <button type="submit">Submit</button>
    `)
})

app.route("/result")
    .post((req, res)=> {
        if(req.body.result){
            if(req.body.result === "7") {
                res.send("Answer is correct")
            }else {
                res.status(400);
                res.type("json")
                res.statusMessage=" Invalid Request / Bad Request"
                res.send("Your anser is wrong")
            }
        }
    })
    .get((req, res)=> {
        res.redirect("/")
    })


app.use("/", (req, res)=> {
    res.status(404).send("<h1>Page not found</h1>")
})
app.listen(3000)