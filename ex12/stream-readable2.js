console.clear();
import fs from 'fs'

let stream= fs.createReadStream("b.txt")

stream.on("data", (chunk)=> {
    console.log(chunk.length);
})

stream.on("end", ()=> {
    console.log("no more data");
})
