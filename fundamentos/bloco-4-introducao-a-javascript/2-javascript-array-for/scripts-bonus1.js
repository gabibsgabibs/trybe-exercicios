let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(i = 1; i < numbers.length; i+=1){
   for(i2 = 0; i2 < numbers.length -1; i2+=1){
     if(numbers[i] < numbers[i2]){
        let replace = numbers[i];
        numbers[i] = numbers[i2];
        numbers[i2] = replace;
     }
   }
}

console.log(numbers);