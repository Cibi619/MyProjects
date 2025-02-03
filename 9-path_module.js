const path = require('path');

console.log(path)

const filePath = path.join('/content', 'sub_content', 'test.txt');

console.log(filePath,"--filePath")

const absolute = path.resolve(__dirname, 'content','sub_content', 'test.txt');

console.log(absolute, "--> absolutePath")