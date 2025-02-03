const {readFile, writeFile} = require('fs');
console.log('Start')
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err)
    {
        console.log(err, "--err");
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err)
        {
            console.log(err, "--err");
            return;
        }
        const second = res;
        writeFile('./content/result-async.txt', `Here is the result of combined files again : ${first}, ${second}`, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Done with the task');
        });
    }, {flag: 'a'})
})

console.log('Starting a new task')