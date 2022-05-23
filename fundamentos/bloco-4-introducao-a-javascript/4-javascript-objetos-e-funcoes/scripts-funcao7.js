function verify (word, ending) {
  word = word.split('');
  ending = ending.split('');
  let control = true;

  for (let i = 0; i < ending.length; i += 1){
    if(word[word.length - ending.length + i] != ending[i]) {
      control = false;
    }
  }
  return control;
}

console.log(verify('trybe', 'be')); 
console.log(verify('joaofernando', 'fernan'));