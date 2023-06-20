console.clear();
import { pipeline } from "stream"
import { createGzip } from "zlib";
import fs from "fs"

// const readable= fs.createReadStream("b.txt")
// const writable= fs.createWriteStream("zip.gz")
// const zipper= createGzip()

// pipeline(readable, zipper,writable, (err)=> {
//     if(err) {
//         console.log("There is an error");
//     } else {
//         console.log("Successfull");
//     }
// })

import { pipeline as pipelinePromis } from "stream/promises";
const preadable= fs.createReadStream("b.txt")
const pwritable= fs.createWriteStream("pzip.gz")
const pzipper= createGzip()

async function pipelineTest() {
    try {
        await pipelinePromis(preadable, pzipper, pwritable)
        console.log("Successfull");
    } catch (error) {
        console.log("There is an error");
    }
}
pipelineTest();