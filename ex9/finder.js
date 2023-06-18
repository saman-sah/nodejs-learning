import EventEmitter from 'events'
import  { readFileSync } from 'fs'
export default class Finder extends EventEmitter {
    constructor(regex) {
        super();
        this.regex= regex;
        this.files= [];
    }
    addFiles(files) {
        console.log(typeof files);
        console.log(files);
        if(typeof files=== "string") {
            this.files.push(files);
        }else if(typeof files === Object) {
            for (const file of files) {
                this.files.push(file);
            }
        }
    }

    find() {
        for(const file of this.files){
            try {
                const content= readFileSync(file, 'utf-8');
                const match= content.match(this.regex);
                if(match) {
                    for(const found of match){
                        this.emit("found", file, found);
                    }
                }
            } catch (error) {
                this.emit("error", error)
            }
        }
    }
}