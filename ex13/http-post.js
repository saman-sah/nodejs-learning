console.clear();

import http from 'https'
const config= {
    host: "jsonplaceholder.typicode.com",
    path: "/todos",
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
    }
}

const req= http.request(config, callback);

const data= {
    userId: 350,
    title: "test new todo from nodejs",
    completed: false,    
}

req.write(JSON.stringify(data))
req.end();
function callback(res) {
    console.log("Status code:" + res.statusCode);
    let body="";
    res.on("data", (chunk)=> {
        body += chunk.toString();
    })
    res.on("close",()=> {
        console.log(JSON.parse(body));
    })
}
