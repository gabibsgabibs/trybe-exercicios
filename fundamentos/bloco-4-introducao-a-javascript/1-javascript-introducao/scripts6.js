const peca = "PeAo";

switch(peca.toLowerCase()){
   case "peao":
      console.log("uma casa à frente")
   break;
   case "torre":
      console.log("em linha reta")
   break;
   case "cavalo":
      console.log("em L")
   break;
   case "bispo":
      console.log("diagonal")
   break;
   case "rainha":
      console.log("em linha reta e diagonal")
   break;
   case "rei":
      console.log("uma casa em todas as direções")
   break;
   default:
      console.log("Erro! Insira uma peça válida.");
}