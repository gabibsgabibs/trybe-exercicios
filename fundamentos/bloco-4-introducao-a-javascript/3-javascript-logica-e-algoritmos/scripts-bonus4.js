let n = 5;
let ast = '*';
let line = '';

let midOfMatrix = (n + 1) / 2;
let left = midOfMatrix;
let right = midOfMatrix;

for(let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1){
  for(let columnIndex = 0; columnIndex <= n; columnIndex += 1){
    if (columnIndex > left && columnIndex < right){
      line = line + ast;
    }else{
      line = line + ' ';
    }
  }
  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}