function verificaPalindrome (word) {
  let reverse = word.split('').reverse().join('');
  if (word === reverse){
    console.log(`A palavra ${word} é um palíndromo!`);
  } else {
    console.log(`A palavra ${word} NÃO é um palíndromo!`);
  }
}

verificaPalindrome('arara')