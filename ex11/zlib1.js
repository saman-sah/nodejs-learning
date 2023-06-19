console.clear();

import zlib from 'zlib'

let str=`dsfdf fdsflksd sklkfdlk s;dfsdl;kf klsdkfsf kl;sdkfsdf 
fdlks;dlkffdsfdff fdsdfsf fdsdfs fsdfsdf dsfsdfsdf sdfsdf 
ksdflsdkf;sf dkflkkdsf`

console.log(str.length);

let zipped= zlib.gzipSync(str);
console.log(zipped);
console.log(zipped.length);
let unzipped= zlib.gunzipSync(zipped)
console.log(unzipped);
console.log(unzipped.length);

console.log(unzipped.toString());