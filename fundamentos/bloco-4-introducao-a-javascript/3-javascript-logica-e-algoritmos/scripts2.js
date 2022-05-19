//exercicio inverter palavra

let word = 'tryber';
let swap = '';
let final = '';


for(let i = 1; i <= word.length; i+=1){
  swap = word[word.length - i];
  final += swap;
}
console.log(final);