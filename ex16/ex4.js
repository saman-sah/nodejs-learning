
console.clear();

import inquirer from "inquirer";

inquirer
.prompt({
    type: "checkbox",
    name: "laguages",
    message: "What are your favorite programming languages?",
    // choices:["a", "b", "c", "d"]
    choices:[
        new inquirer.Separator("------Compiled--------"),
        "C",
        "Java",
        "C++",
        "Go",

        new inquirer.Separator("------Interpreted--------"),
        "JavaScript",
        "PHP",
        "Python",
        "Perl"
    ]
})
.then((answer)=> {
    console.info("Answer:", answer.laguages);
})