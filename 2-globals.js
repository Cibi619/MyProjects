console.log(__dirname); // path to current directory

// globals - variables, func, objects that are accessible in your code without requiring an import. (__dirname) is an example

console.log(__filename);
console.log(process.pid, process.platform);

setTimeout(() => console.log('Hello'), 1000);