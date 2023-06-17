class Color {
    constructor(r=0, g=0, b=0) {
        this.#r= r
        this.#g= g
        this.#b= b
    }
    static fromHex(hex) {
        const regex= new RegExp("^[0-9a-f]{6}$", "i");
        if(!regex.test(hex)) {
            throw new Error("Invalid Hex code: " + hex)
        }
        return new Color (
            parseInt(hex.substring(0, 2), 16),
            parseInt(hex.substring(2, 4), 16),
            parseInt(hex.substring(4, 6), 16),
        )
    }
    get red() {
        return this.#r
    }
    set red(value) {
        if(value >=0 && value <=255) {
            this.#r= parseInt(value)
        }else {
            throw new RangeError('Value must be between 0 and 255')
        }
    }
}
const color1= new Color();
const color2= new Color(20, 34, 222)
color2.red= 222

console.log(color1);
console.log(color2);



const color=Color.fromHex('21cf44')
console.log(color);