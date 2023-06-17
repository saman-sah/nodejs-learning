const fs = require('fs');

async function test() {
    const data= await fs.promises.readFile("./data.json", "utf-8");
    console.log(data);
}
test()
const json= require("./data.json")
console.log(json);