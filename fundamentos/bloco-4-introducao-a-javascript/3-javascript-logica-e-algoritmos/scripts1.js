//exercicio fatorial

let number = 10;
let multiplier = number;

for(let i = 1; i < number; i+=1){
  multiplier = multiplier * (number - i); 
}
console.log(multiplier);