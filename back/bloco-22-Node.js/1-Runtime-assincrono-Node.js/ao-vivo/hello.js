const { askName } = require('./askName');

const name = askName();

console.log(`Hello ${name}!`);