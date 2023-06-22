console.clear();

import { stringify } from "csv";
import { stringify as stringifySync } from "csv/sync";

const data=[
    ["1", "2", "3", "4"],
    ["a", "b", "c", "d"],    
    ["\n",'"', ",", "'"],    
]

// stringify(data, {}, (err, output)=> {
//     if(!err) {
//         console.log(output);
//     }else {
//         console.log("There is an error");
//     }
// })

const output= stringifySync(data, {
    columns: ["h1", "h2", "h3", "h4"],
    header: true,
    delimiter:":"
})

console.log(output);