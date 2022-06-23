// 1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newPerson = (name) => {
  const mail = name.toLowerCase().split(' ').join('_');
  return {
    nome: name,
    email: `${mail}@trybe.com`,
  }
}


const newEmployees = () => {
  const employees = {
    id1: newPerson('Pedro Guerra'),
    id2: newPerson('Luiza Drummond'), 
    id3: newPerson('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());


// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberChecker = (bet, number) => bet === number;

const lottery = (bet, callback) => {
  const number = Math.floor(Math.random() * 5);
  console.log(number);

  return callback(bet, number) ? 'Parabéns você ganhou!' : 'Tente novamente';
};

console.log(lottery(2, numberChecker));

// 3. Crie uma HOF que receberá três parâmetros(um array de respostas corretas (Gabarito), um array contendo as respostas fornecidas por uma pessoa estudante, uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos). Além disso, uma resposta correta adiciona 1 ponto à pontuação final; A ausência de uma resposta não altera a pontuação (quando for "N.A"); Uma resposta incorreta reduz a pontuação final em 0.5 ponto. Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));