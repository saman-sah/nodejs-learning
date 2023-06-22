console.clear();

import inquirer from "inquirer";

// inquirer
// .prompt({
//     type: "input",
//     name: "language",
//     message: "What's your favorite programming language?",
//     default: "JavaScript"
// })
// .then((answer)=> {
//     console.info("Answer:", answer.language);
// })

inquirer
.prompt({
    type: "input",
    name: "language",
    message: "What's your favorite programming language?",
    default: "JavaScript",
    validate: (value)=> {
        if(value.length <3) {
            return "Title must be at least 3 character"
        }
        return true;
    }
})
.then((answer)=> {
    console.info("Answer:", answer.language);
})