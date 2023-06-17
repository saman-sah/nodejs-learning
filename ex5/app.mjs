import { createRequire } from "module";

const require= createRequire(import.meta.url)

console.log(import.meta.url);

const json= require("./data.json")
console.log(json);

const cjdModule= require("./module.cjs")
console.log(cjdModule.next());

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

console.log(__filename);
console.log(__dirname);
console.log(import.meta.url);