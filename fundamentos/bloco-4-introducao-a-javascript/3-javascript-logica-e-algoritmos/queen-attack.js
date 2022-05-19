/**
 * Problema: dada a posição da rainha e a posição da peça oponente, devemos verificar se a rainha PODE
 *  ou NÃO PODE atacar essa peça oponente.
 * OBS: NÃO iremos EFETIVAMENTE movimentar a rainha, apenas verificar se o ataque é possível!
 */

//Posição original da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;

// Posição da peça oponente
let opponentRowPosition = 3;
let opponentColumnPosition = 2;
// Alguma variável que armazene se é possível ou não ocorrer o ataque
let canAttack = false;

// Cálculo para entender se o ataque pode ser realizado

//Se a rainha estiver na mesma linha ou na mesma coluna que a peça oponente, o ataque pode ser realizado!
if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
  canAttack = true;
  console.log('Pode atacar na mesma linha ou coluna!');
}

// Identificar se a peça oponente está na diagonal superior direita
for (let upperRight = 1; upperRight < 8; upperRight +=1) {
  let currentQueenRow = queenRowPosition + upperRight;
  let currentQueenColumn = queenColumnPosition + upperRight;

  //Se a posição da linha ou da coluna for maior que 8, ela sai do tabuleiro
  if (currentQueenRow > 8 || currentQueenColumn > 8) {
    break;
  }

  //Se a linha e a coluna do ataque da rainha (current) forem iguais a posição da peça, significa que pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('Pode atacar na diagonal superior direita!')
    break;
  }
}

// Identificar se a peça oponente está na diagonal inferior esquerda
for (let lowerLeft = 1; lowerLeft < 8; lowerLeft +=1 ){
  let currentQueenRow = queenRowPosition - lowerLeft;
  let currentQueenColumn = queenColumnPosition - lowerLeft;

  //Se a posição da linha ou da coluna for menor que 1, ela sai do tabuleiro
  if (currentQueenRow === 0 || currentQueenColumn === 0) {
    break;
  }

  //Se a linha e a coluna do ataque da rainha (current) forem iguais a posição da peça, significa que pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('Pode atacar na diagonal inferior esquerda!')
    break;
  }
}


// Identificar se a peça oponente está na diagonal superior esquerda
for (let upperLeft = 1; upperLeft < 8; upperLeft +=1 ){
  let currentQueenRow = queenRowPosition + upperLeft;
  let currentQueenColumn = queenColumnPosition - upperLeft;

  //Se a posição da linha for maior que 8 ou a coluna for menor que 1, ela sai do tabuleiro
  if (currentQueenRow === 9 || currentQueenColumn === 0) {
    break;
  }

  //Se a linha e a coluna do ataque da rainha (current) forem iguais a posição da peça, significa que pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('Pode atacar na diagonal superior esquerda!')
    break;
  }
}

// Identificar se a peça oponente está na diagonal inferior direita
for (let lowerRight = 1; lowerRight < 8; lowerRight +=1 ){
  let currentQueenRow = queenRowPosition - lowerRight;
  let currentQueenColumn = queenColumnPosition + lowerRight;

  //Se a posição da linha for menor que 1 ou a coluna for maior que 8, ela sai do tabuleiro
  if (currentQueenRow === 0 || currentQueenColumn === 9) {
    break;
  }

  //Se a linha e a coluna do ataque da rainha (current) forem iguais a posição da peça, significa que pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('Pode atacar na diagonal inferior direita!')
    break;
  }
}

if (canAttack === false) {
  console.log('Não é possível atacar!');
}
