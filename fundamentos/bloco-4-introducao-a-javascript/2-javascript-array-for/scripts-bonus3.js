let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr =[];

for(i = 0; i < numbers.length; i+=1){
   if(i == numbers.length -1){
      newArr.push(numbers[i]*2)
   }else{
      newArr.push(numbers[i]*numbers[i+1]);
   }  
}
console.log(newArr);