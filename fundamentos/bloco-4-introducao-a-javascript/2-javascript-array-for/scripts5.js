let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 270];
let maior = numbers[0];

for(i = 0; i < numbers.length; i+=1){
   if(numbers[i] > maior){
      maior = numbers[i];
   }
}

console.log(`O maior número é ${maior}`);