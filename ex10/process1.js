console.clear();
import process from 'process'
import EventEmitter from 'events'

console.log(process instanceof EventEmitter);
console.log(process.constructor.name);

console.log(process.cwd());

setTimeout(()=> {
    console.log('set time out');
}, 0)

process.nextTick(()=> {
    console.log('nect Tick');
})

console.log('Hello');

