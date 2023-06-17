function factoryFish(color, max, current) {
    return {
        color,
        max,
        current,

        up() {
            if(this.current < 20) {
                this.current++
            }
        },
        down() {
            if(this.current > 0) {
                this.current--
            }
        }
    }
}
const fish1= factoryFish('black', 20, 7)
const fish2= factoryFish('green', 16, 2)
console.log(fish1);
console.log(fish2);