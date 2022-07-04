// 8. Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Ue default params
const greet = (name = 'pessoa anônima', greeting = 'Olá') => `${greeting} ${name}!`;

console.log(greet('John', 'Hi')) // 'Hi John!'
console.log(greet('John', 'Good morning')) // 'Good morning John!'
console.log(greet('Isabela')) // 'Olá Isabela!'
console.log(greet()) // 'Olá pessoa anônima!'