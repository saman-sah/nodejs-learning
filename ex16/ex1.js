console.clear();

import inquirer from "inquirer";

// inquirer
// .prompt({
//     type: "input",
//     name: "firstname",
//     message: "What is yout firstname?"
// })
// .then((answer)=> {
//     console.info("Answer:", answer.firstname);
// })


inquirer
.prompt([
    {
        type: "input",
        name: "firstname",
        message: "What is yout firstname?"
    },
    {
        type: "input",
        name: "lastname",
        message: "What is yout lastname?"
    }
])
.then((answer)=> {
    console.info("Answer:", answer.firstname + " "+ answer.lastname);
})