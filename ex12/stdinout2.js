console.clear();

let firstname,
lastname,
step=1;

process.stdout.write("What's your firstname?")

process.stdin.on("data", (chunk)=> {
    if(step===1) {
        firstname= chunk.toString().trimEnd();
        process.stdout.write("What's your lastname?")
        step=2;
    }else if (step=== 2) {
        lastname= chunk.toString().trimEnd();
        process.stdin.pause();
        showResult();

    }
})

function showResult() {
    console.log("Your full name is " + firstname + " " + lastname);
}