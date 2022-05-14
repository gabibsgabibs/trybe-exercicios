let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaImpares = 0;

for(i = 0; i < numbers.length; i+=1){
   if(numbers[i] % 2 != 0){
      somaImpares+=1;
   } 
}

if (somaImpares != 0){
   console.log(`Existem ${somaImpares} números ímpares no array.`);
}else{
   console.log('Nenhum valor ímpar encontrado!');
}

