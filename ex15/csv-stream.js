console.clear();

import { parse, stringify, transform } from "csv";
import fs from 'fs'

let totalAge= 0;
let row=0;

const readable= fs.createReadStream("./passengers.csv")
const writable= fs.createWriteStream("new-file.csv")

const parser= parse({
    columns: true,
    cast:(value, context) => {
        if(["PassengerId", "Age", "SibSp","Parch","Ticket","Fare","Cabin"].includes(context.column)) {
            return Number(value);
        }
        return value
    }
})

const transformer= transform((data)=> {
    totalAge += data.Age
    row++
    data["Total"]= parseInt(data.PassengerId / 2)
    return data
})

const stringigier= stringify({header: true})

readable
.pipe(parser)
.pipe(transformer)
.pipe(stringigier)
.pipe(writable)


stringigier.on("end", ()=> {
    console.log("totalAge: " + parseInt(totalAge/row));
})