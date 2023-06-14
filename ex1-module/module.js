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

// module.exports.increment= increment;
// module.exports.decrement= decrement;
// module.exports.square= square;

exports.increment= increment;
exports.decrement= decrement;
exports.square= square;

