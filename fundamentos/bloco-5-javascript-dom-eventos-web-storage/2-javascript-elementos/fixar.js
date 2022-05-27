// Primeira parte
// 1.Acesse o elemento elementoOndeVoceEsta.
let ondeEsta = document.getElementById('elementoOndeVoceEsta');

// 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = ondeEsta.parentElement;
pai.style.color = 'red';

// 3.Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerText = 'Texto de teste aqui';

// 4.Acesse o primeiroFilho a partir de pai.
let primeiroFilho = pai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
primeiroFilho = ondeEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atention = ondeEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = ondeEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
terceiroFilho = pai.lastElementChild.previousElementSibling;


// Segunda parte
// 1. Crie um irmão para elementoOndeVoceEsta.
let irmao = document.createElement('section');
irmao.id = 'irmaoOndeEsta';
pai.appendChild('irmao');

// 2. Crie um filho para elementoOndeVoceEsta.
let filho = document.createElement('section');
filho.id = 'filhoOndeEsta';
ondeEsta.appendChild('fiho');

// 3. Crie um filho para primeiroFilhoDoFilho.
let neto = document.createElement('section');
neto.id = 'neto';
filhoDoFilho.appendChild('neto');

// 4. A partir desse filho criado, acesse terceiroFilho.
let tercFilhoAgain = neto.parentElement.parentElement.nextElementSibling;


// Terceira parte
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();