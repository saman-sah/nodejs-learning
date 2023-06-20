// non flowing mode - paused mode

console.clear();
import fs from 'fs'

let stream= fs.createReadStream("b.txt")

// stream.on("readable", ()=> {
//     let chunk= stream.read();
//     if(chunk !== null) {
//         console.log(chunk.length);
//     }else {
//         console.log("null returned");
//     }

// })

// stream.on("readable", ()=> {
//     let chunk; 
//     while (true) {
//         chunk= stream.read(30000);
//         if(chunk !== null) {
//             console.log(chunk.length);
//         }else {
//             console.log("null returned");
//             break;
//         }
//     }

// })

stream.on("end", ()=> {
    console.log("no more data");
})


stream.on("readable", ()=> {
    let chunk; 
    while (chunk= stream.read(30000)) {
        console.log(chunk.length);
    }

})