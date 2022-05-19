let n = 5;
let ast = '*';
let line = '';

for(let il = 0; il < n; il += 1){
  for(let ic = 0; ic <= n; ic += 1){
    if(ic < n - il){
      line = line + ' ';
    }else{
      line = line + ast;
    }
  }
  console.log(line);
  line = "";
}