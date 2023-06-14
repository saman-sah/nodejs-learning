const fs= require('fs')
const promises = require('fs/promises');


// fs.writeFile('f.txt', 'Hows your week been treating you?', 'utf-8', (err)=> {
//     if(err) {
//         console.log('write an error occured!!!');
//     }else {
//         console.log('finish writing');
//     }
// })
// fs.appendFile('f.txt', '\nits treating well', 'utf-8', (err)=> {
//     if(err) {
//         console.log('append an error occured!!!');
//     }else {
//         console.log('finish append');
//     }
// })

// fs.readFile('f.txt', 'utf-8' , (err, data)=> {
//     if(err) {
//         console.log('read an error occured!!!');
//     }else {
//         console.log(data);
//     }
// })

// fs.copyFile('f.txt', 'g.txt', (err)=> {
//     if(err) {
//         console.log('read an error occured!!!');
//     }else {
//         console.log('copied!');
//     }
// })

async function write() {
    try {
        await promises.writeFile('h.txt', 'hello world');
        console.log('finish writing');
    } catch (error) {
        console.log(error);
    }
}

write();

