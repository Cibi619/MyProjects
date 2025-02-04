const fs = require('fs')

console.log('Starting a task')

fs.readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(res)
    console.log('First task completed')
})

console.log('Starting the other task')

/* See the order of execution here */