let number= 1;

function next() {
     return ++number
}

function prev() {
    return --number
}

function square() {
    return number * number
}

module.exports= {
    prev, 
    square 
}
module.exports['next']= next;
module.exports.cube= function() {
    return number * number * number
}


// 4 way to export on CJS files

//111111111111111111
// module.exports.increment= increment;
// module.exports['increment']= increment;

//222222222222222222
// exports.increment= increment;

//33333333333333333333
// module.exports ={
//     increment,
//     decrement,
//     square
// }

//444444444444444444444444444
// exports.increment= function () {
//     return ++number
// }