console.clear();
import zlib from 'zlib'
import fs from 'fs'

// Read File 
let start= Date.now();
const text= fs.readFileSync('./lorem.txt')
let end= Date.now();
console.log(text);
console.log(end - start);
console.log(`Text length: ${text.length} B `);


// Zipped File and Write it to another file
let zipped, start2, end2
start2= Date.now();
zipped= zlib.brotliCompressSync(text)
end2= Date.now();
console.log(zipped);
console.log(end2 - start2);
console.log(`zipped length: ${zipped.length} B `);

fs.writeFileSync('zipped.gz', zipped)


// UnZipped File and Write it to another file
let unzipped, start3, end3
start3= Date.now();
unzipped= zlib.brotliDecompressSync(zipped)
end3= Date.now();
console.log(unzipped);
console.log(end3 - start3);
console.log(`zipped length: ${unzipped.length} B `);

fs.writeFileSync('unzipped.txt', unzipped)

