const readline = require('readline-sync');

const askName = () => readline.question('Qual é o nome do pacote? ');

module.exports = { askName };