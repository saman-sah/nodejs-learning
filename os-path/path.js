const path = require('path');

console.log(path.delimiter);
console.log(path.sep);
console.log(path.join("C:", 'a.txt'));
console.log(path.join("a/b/c", "a.txt"));
console.log(path.join("a/b/c/", "/a.txt"));
console.log(path.join("a/b/c/", ".." , "/d/f" , "/a.txt"));

console.log(__dirname);
console.log(__filename);

console.log(path.join(__dirname, "..", "a.txt"));
console.log(path.dirname("C:/a/b/c/m.exe"));
console.log(path.extname("C:/a/b/c/m.exe"));

console.log(path.isAbsolute("C:/a.txt"));
console.log(path.isAbsolute("/a.txt"));
console.log(path.isAbsolute("a.txt"));
console.log(path.isAbsolute("b/a.txt"));

console.log(path.parse(__dirname));
console.log(path.parse(__filename));