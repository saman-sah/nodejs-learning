console.clear();

import { URL } from 'url';

// const myUrl= new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");
const myUrl= new URL("/p/a/t/h?query=string#hash", "https://user:pass@sub.example.com:8080/")

console.log(myUrl.href, "\n");
console.log(myUrl.hash);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.port);
console.log(myUrl.origin);
console.log(myUrl.username);
console.log(myUrl.password);
console.log(myUrl.pathname);
console.log(myUrl.protocol);
console.log(myUrl.search, "\n");

console.log(myUrl.searchParams);
console.log(myUrl.searchParams.get("query"));

