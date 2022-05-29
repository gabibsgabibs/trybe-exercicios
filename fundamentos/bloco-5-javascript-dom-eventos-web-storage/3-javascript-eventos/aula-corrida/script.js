window.onload = function () {
  //Capturar o botão de acelerar
  let btn = document.querySelector('#start-race-btn');

  //Capturar os carrinhos
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');

  //Definir margem inicial dos carrinhos
  resetCarsPosition(car1, car2);

  //Criar o evento do click do botao
  //1o parametro -> Qual o tipo do evento? (string)
  //2o parametro -> O que fazer quando o evento acontecer? (funcao)
  btn.addEventListener('click', function() {
    car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
    car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';
  
    //Verificar se os carros chegaram ao final da janela do navegador
    if (parseInt(car1.style.marginLeft) > window.innerWidth){
      alert('Carro laranja ganhou a corrida!');
      resetCarsPosition(car1, car2);
    }
    if (parseInt(car2.style.marginLeft) > window.innerWidth){
      alert('Carro amarelo ganhou a corrida!');
      resetCarsPosition(car1, car2);
    }

  });
}

function resetCarsPosition (car1, car2) {
  car1.style.marginLeft = '0px';
  car2.style.marginLeft = '0px';
}