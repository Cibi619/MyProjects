const {readFileSync, writeFileSync} = require('fs')
console.log('Start')
const firstContent = readFileSync('./content/first.txt', 'utf8');
const secondContent = readFileSync('./content/second.txt', 'utf8');

console.log(firstContent);
console.log(secondContent);

// writeFileSync - to write content to a file

writeFileSync('./content/result.txt', `Here is the combined content : ${firstContent}, ${secondContent}`);
console.log('Done with the task')
console.log('Starting a new one');
