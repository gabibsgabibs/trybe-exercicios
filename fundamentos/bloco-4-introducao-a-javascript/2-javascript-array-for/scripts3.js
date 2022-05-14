let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for(i = 0; i < numbers.length; i+=1){
   media = media + numbers[i];
}

console.log(`A média é ${(media/numbers.length)}`)