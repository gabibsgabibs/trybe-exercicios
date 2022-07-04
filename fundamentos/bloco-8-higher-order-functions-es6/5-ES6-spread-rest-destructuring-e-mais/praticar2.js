// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...elements) => elements.reduce(((result, element) => result + element), 0);
console.log(sum(4, 2, 18));