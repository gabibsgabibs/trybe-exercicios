const bruto = 3000;
let base;
let liquido;

//salario com inss descontado
if(bruto<= 1556.94){
   base = bruto - (bruto * 0.08);
}else if(bruto<= 2594.92){
   base = bruto - (bruto * 0.09);
}else if(bruto<= 5189.82){
   base = bruto - (bruto * 0.11);
}else{
   base = bruto - 570.88;
}

//salario com ir descontado
if(base<=1903.98){
   liquido = base;
}else if(base<=2826.65){
   liquido = base - ((base * 0.075)-142.8);
}else if(base<=3751.05){
   liquido = base - ((base * 0.15)-354.8);
}else if(base<=4664.68){
   liquido = base - ((base * 0.225)-636.13);
}else{
   liquido = base - ((base * 0.275)-869.36);
}

console.log(`O salário bruto é de ${bruto}`);
console.log(`O salário base é de ${base}`);
console.log(`O salário líquido é de ${liquido}`);