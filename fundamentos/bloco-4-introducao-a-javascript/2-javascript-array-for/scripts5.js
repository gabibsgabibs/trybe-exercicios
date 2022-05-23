let arr = [5, 9, 3, 19, 70, 8, 100, 2, 35, 270];
let maior = arr[0];

for(i = 0; i < arr.length; i+=1){
   if(arr[i] > maior){
      maior = arr[i];
   }
}

console.log(`O maior número é ${maior}`);