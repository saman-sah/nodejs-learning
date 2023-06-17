class Fish {
    constructor(color, max, current) {
        this.color= color
        this.max= max
        this.current= current
    }
    up() {
        if(this.current < 20) {
            this.current++
        }
    }
    down() {
        if(this.current > 0) {
            this.current--
        }
    }
}

const fish1= new Fish('black', 20, 7)
const fish2= new Fish('green', 16, 2)
console.log(fish1);
console.log(fish2);