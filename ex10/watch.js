import fs from 'fs'

const watch= fs.watch('a.txt', {recursive: true})

watch.on("change", (event, filename)=> {
    if(watch.waiting){
        return;
    }
    watch.waiting= true;
    console.log(event, filename);   
    setTimeout(() => {
        watch.waiting= false;
    }, 100);
})