// Event-Driven programming js

const EventEmitter = require('events')  // responsible for listening and emit events in js

const customEmitter = new EventEmitter();

customEmitter.on('Print', (name) => console.log(`Hello ${name}`))

customEmitter.emit('Print', 'Cibi');