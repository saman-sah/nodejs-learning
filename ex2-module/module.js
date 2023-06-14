let number= 0;

function increment() {
    return ++number
}
function decrement() {
    return --number
}
function square() {
    return number * number
}

module.exports ={
    increment,
    decrement,
    square
}