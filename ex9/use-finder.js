console.clear();
import Finder from "./finder.js";

const newFinder= new Finder(/saman/g)

newFinder.addFiles()
newFinder.addFiles(["a.txt", "b.txt"])

newFinder.on('found', (file, match)=> {
    console.log(`Matched ${match} in file ${file}`);
})

newFinder.on('error', (error)=> {
    console.log(error.message);
})

newFinder.find();