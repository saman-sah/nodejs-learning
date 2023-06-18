import fs from 'fs'
import EventEmitter from 'events';

let counter=0
const watch= fs.watchFile("a.txt", {interval: 100}, (curr, prev)=> {
    // console.clear();
    // console.log(curr.mtime);
    // console.log(prev.mtime);
    // console.log(++counter);
});


console.log(watch instanceof EventEmitter);
console.log(watch.eventNames());

watch.on('change', (curr, prev)=> {
    console.clear();
    console.log(curr.mtime);
    console.log(prev.mtime);
    console.log(++counter);
})

