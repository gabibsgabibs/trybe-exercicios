function sum (number) {
  let total = 0;
  for (let i = 1; i <= number; i += 1){
    total = total + i;
  }
  return total;
}

console.log(sum(5));