async function test() {
    const esmModule= await import('./module.mjs')
    console.log(esmModule.next());
    console.log(esmModule.default.cube());
}
// test();

import("./module.mjs").then((esmm)=> {
    console.log(esmm.next());
    console.log(esmm.default.cube());
})