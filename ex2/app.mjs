import fs from 'fs'
const data= await fs.promises.readFile("./data.json", "utf-8")

console.log(data);