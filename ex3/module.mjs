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

export { next, prev as p, square }
export default {
    cube() {
        return number * number * number
    }
}