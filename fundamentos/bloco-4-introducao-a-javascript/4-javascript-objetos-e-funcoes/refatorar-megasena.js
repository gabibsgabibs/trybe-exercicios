// 1. Gerar um número aleatório
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  return randomNumber;
}

// 2. Gerar um jogo (sortear os números)
function generateGame() {
  let megaSenaGame = [];
  for (let i=1; i <= 6; i += 1){
    let randomGameNumber = generateRandomNumber();
    megaSenaGame.push(randomGameNumber);
  }
  return megaSenaGame;
}

// 3. Conferir um jogo e compará-lo com o resultado da mega sena
function checkMegaSenaResult(result, game) {
  let numberOfHits = 0;

  for (let i = 0; i < result.length; i += 1) {
    let drawnNumber = result[i];

    for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1){
      let gabibsNumber = game[gameIndex];

      if (drawnNumber === gabibsNumber) {
        numberOfHits += 1;
      }
    }
  }
  return numberOfHits;
}

//Nosso jogo
let gabibsGame = [7, 21, 33, 45, 56, 60];

//Jogo sorteado
let megaSenaNumbers = generateGame ();

console.log('Jogo da Mega Sena: ' + generateGame());
console.log('O meu jogo: ' + gabibsGame);
console.log('Eu tive ' + checkMegaSenaResult(megaSenaNumbers, gabibsGame) + ' acertos!');