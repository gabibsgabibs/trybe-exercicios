function whoRepeats (numbers) {
  let repeat = 0;
  let counter = 0;
  let repeatIndex = 0;

  for (let index in numbers) {
   let check = numbers[index];
   for (let index2 in numbers){
     if (check === numbers[index2]) {
      counter +=1;
     }
   }
   if (counter > repeat) {
    repeat = counter;
    repeatIndex = index;
   }
   counter = 0;
  }
  return numbers[repeatIndex];
}

console.log(whoRepeats([2, 3, 2, 5, 8, 2, 3])); 