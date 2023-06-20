console.clear();

process.stdin.on("data", (chunk)=> {
    console.log(chunk.toString().toUpperCase());
})

process.stdin.on("readable", ()=> {
    let chunk;
    while((chunk= process.stdin.read())) {
        console.log(chunk.toString().toUpperCase());
    }
})

process.stdin.on("data", (chunk)=> {
    process.stdout.write(chunk.toString().toUpperCase())
})



process.stdin.on("data", (chunk)=> {
    if(chunk.toString().toLowerCase().trimEnd() === "q") {
        process.stdin.pause();
        console.log("continues");
    }else {
        process.stdout.write(chunk);
    }
})