console.clear();

import { parse } from 'csv'
import { parse as parseSync } from "csv/sync";
import fs from 'fs'

const input= fs.readFileSync("./test.csv")

// parse(input, { columns: true }, function(err, records) {
//     if(!err) {
//         console.log(records);
//     }else {
//         console.log("error");
//     }
// })

const records= parseSync(input, {
    columns: true,
    skipEmptyLines:true,
    cast: (value, context) => {
        if(context.column === "Pages" || context.column === "Year") {
            return Number(value)
        }
        return value
    },
    comment: "#",
    delimiter: ",",
    from: 2,
    to: 2,
    trim: true
})

console.log(records);