const {createReadStream} = require('fs')

const stream = createReadStream('./content/big-file.txt');

stream.on('data', (chunk) => console.log(chunk));

// streams are useful to read small chunk of code at a time. It is time efficient and fast