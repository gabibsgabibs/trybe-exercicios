// PRIMEIRA PARTE

// 1.Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function; modifique as variáveis para que respeitem o escopo onde estão declaradas; modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

// 2.Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7; 
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    return oddsAndEvens;
  };
  const sortedArray = sortOddsAndEvens();
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); 

// 3. Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens2 = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens2 = array.sort((a, b) => a - b);
  return sortOddsAndEvens2;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens2);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

// SEGUNDA PARTE
// 1. Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }
  return result;
};

// 2. Crie uma função que receba uma frase e retorne a maior palavra.
const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }
  return result;
}
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// 4. Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};
console.log(substituaX('Bebeto'));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
{func}
  Minhas três principais habilidades são:`;
  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};
console.log(minhasSkills(substituaX('Bebeto')));