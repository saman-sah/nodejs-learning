console.clear();

import EventEmitter from 'events'

const emitter = new EventEmitter();

// Event 1
emitter.on('event1', () => {
    console.log('event1');
});
emitter.emit('event1')
emitter.emit('event1')

// Event 2
emitter.addListener('event2', (...args)=> {
    console.log(args);
})
emitter.emit('event2', 1, 2, 3)

// Event 3
emitter.once('event3', () => {
    console.log('event3');
});
emitter.emit('event3')
emitter.emit('event3') //doesnt emit caue we used once

// Event 4
emitter.on('event4', () => {
    console.log(this); //undefined
});
emitter.emit('event4')

// Event 5
emitter.on('event5', function() {
    console.log(this === emitter); //true
});
emitter.emit('event5')

// Event 6
function handlerEvent6() {
    console.log('event6'); //true
}
emitter.on('event6', handlerEvent6)
emitter.emit('event6')
emitter.off('event6', handlerEvent6)
emitter.emit('event6')



emitter.removeAllListeners(); // remove all listener


