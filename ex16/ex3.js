
console.clear();

import inquirer from "inquirer";

// inquirer
// .prompt({
//     type: "number",
//     name: "number",
//     message: "Enter a number?",
//     validate: (value)=> {
//         if(value >100) {
//             return "please enter a number less than 100"
//         }
//         return true;
//     }
// })
// .then((answer)=> {
//     console.info("Answer:", answer.number);
// })




// inquirer
// .prompt({
//     type: "confirm",
//     name: "confirm",
//     message: "Are you sure?",
//     default: false
// })
// .then((answer)=> {
//     console.info("Answer:", answer.confirm);
// })



// inquirer
// .prompt({
//     type: "password",
//     name: "password",
//     message: "Enter your password?",
//     validate: (value)=> {
//         if(value.length < 8) {
//             return "Your password must be grater than 7 character !"
//         }
//         return true;
//     }
// })
// .then((answer)=> {
//     console.info("Answer:", answer.password);
// })


inquirer
.prompt({
    type: "editor",
    name: "text",
    message: "Enter your text !",
})
.then((answer)=> {
    console.info("Answer:", answer.text);
})