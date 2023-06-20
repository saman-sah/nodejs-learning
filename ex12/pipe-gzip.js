import fs from 'fs'
import zlib  from 'zlib'
import { Transform } from 'stream'

const zipper= zlib.createGzip();
const unzipper= zlib.createGunzip();
// let readable= fs.createReadStream("b.txt")
// let writable= fs.createWriteStream("bzipped.gz")

// readable.pipe(zipper).pipe(writable)

let readable= fs.createReadStream("bzipped.gz")
let writable= fs.createWriteStream("bunzip.txt")

readable.pipe(unzipper).pipe(writable)