let array = ['css', 'java', 'javascript', 'python', 'html'];

let maior = array[0];
let menor = array[0];

for(let i = 0; i < array.length; i += 1){
   word = array[i];
   if(array[i].length > maior.length){
      maior = array[i];
   }if(array[i].length < menor.length){
      menor = array[i];
   }   
}

console.log(`A maior palavra é ${maior} e a menor palavra é ${menor}!`);