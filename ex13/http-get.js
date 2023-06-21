console.clear();

import http from 'https'
const config= {
    method: "Get",
}

//=============================================================================
// const req= http.request(
//     "https://jsonplaceholder.typicode.com/todos?_limit=3",
//     config,
// );
// req.end();
// function callback(res) {
//     console.log("res" + res);
//     console.log("Status code:" + res.statusCode);
//     let body="";
//     res.on("data", (chunk)=> {
//         body += chunk.toString();
//     })
//     res.on("close",()=> {
//         console.log(JSON.parse(body));
//     })
// }

// req.on("response", callback)

//=============================================================================
// const req= http.request(
//     "https://jsonplaceholder.typicode.com/todos?_limit=3",
//     config,
//     callback
// );
// req.end();
// function callback(res) {
//     console.log("res" + res);
//     console.log("Status code:" + res.statusCode);
//     let body="";
//     res.on("data", (chunk)=> {
//         body += chunk.toString();
//     })
//     res.on("close",()=> {
//         console.log(JSON.parse(body));
//     })
// }

//=============================================================================
const req= http.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=3",
    config,
    callback
);
req.end();
function callback(res) {
    console.log("res" + res);
    console.log("Status code:" + res.statusCode);
    let body="";
    res.on("data", (chunk)=> {
        body += chunk.toString();
    })
    res.on("close",()=> {
        console.log(JSON.parse(body));
    })
}