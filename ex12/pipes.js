console.clear();

import fs from 'fs'

process.stdin.pipe(process.stdout)

process.stdin.on("data", (chunk)=> {
    if(chunk.toString().toLocaleLowerCase().trimEnd() === "q") {
        process.exit();
    }
}).pipe(process.stdout)


const readable= fs.createReadStream("a.txt")
const writable= fs.createWriteStream("c.txt")

readable.pipe(writable)
