const custo = 0;
const venda = 7.5;
const imposto = 0.2;
let lucro;

if(custo == 0 || venda == 0 || imposto == 0){
   console.log("Erro! Insira um valor acima de 0");
}else{ 
   lucro = (venda - (custo+(custo*imposto)));
console.log(`O lucro em cima de mil produtos foi de ${lucro * 1000}`)
}