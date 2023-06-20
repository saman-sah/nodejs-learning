import { Stream, Readable, Writable, Transform, Duplex } from 'stream'
import EventEmitter from 'events'
import fs, { WriteStream } from 'fs'

const file= fs.createWriteStream("a.txt")

// console.log(file instanceof EventEmitter);
// console.log(file instanceof Stream);
// console.log(file instanceof WriteStream);
// console.log(file instanceof Writable);
// console.log(file instanceof Readable);
// console.log(file instanceof Transform);
// console.log(file instanceof Duplex);


file.write(Buffer.from("Hello "))
file.write(Buffer.from("World! \n"))

setInterval(() => {
    file.write("Hello World! \n")
}, 1900);

setTimeout(() => {
    file.end("End of write file")
}, 10000);

file.on("finish", ()=> {
    console.log("finish");
})