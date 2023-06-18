console.clear();

process.on('beforeExit', ()=> {
    console.log("before exit");
})

process.on("exit", (code)=> {
    console.log("exit" +code);
})
process.exitCode=3


process.on('uncaughtException', (err)=> {
    console.log("uncaught " + err.message);
})
// a() execute uncaughtException - uncaughta is not defined

process.on("warning", (warn)=> {
    console.log(warn);
})

process.emit('warning', "warning message")

process.emitWarning("warning message with a lot of message")