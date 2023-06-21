console.clear();

import http from 'https'
const config= {
    host: "jsonplaceholder.typicode.com",
    path: "/todos?_limit=3",
    method: "Get",
    headers: {
        Accept: "application/json",
        "User-Agent": "http module from Nod.js"
    }
}

const req= http.request(config, callback);
req.end();
function callback(res) {
    console.log("res" + res.headers);
    console.log("res" + res.rawHeaders);
    console.log("Status code:" + res.statusCode);
    let body="";
    res.on("data", (chunk)=> {
        body += chunk.toString();
    })
    res.on("close",()=> {
        console.log(JSON.parse(body));
    })
}

req.on("response", callback)