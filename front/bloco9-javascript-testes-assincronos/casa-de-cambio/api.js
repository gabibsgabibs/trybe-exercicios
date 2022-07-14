// const fetch = require('node-fetch');

const BASE_URL = 'https://api.exchangerate.host';
const LATEST_ENDPOINT = '/latest';

// Função com ÚNICA responsabilidade: criar url com a base da moeda escolhida
const buildUrlBasedOnCurrency = (currency) => `${BASE_URL}${LATEST_ENDPOINT}/?base=${currency}`;

// Função com ÚNICA responsabilidade: fazer requisição da moeda que ta de base
const fetchCurrency = async (currency) => {
  const endpoint = buildUrlBasedOnCurrency(currency);
  // tenta fazer o que ta dentro do bloco try
  try {
    // fetch significa retorna (porém é uma promisse) e o await pede pra não retornar nada até que tenha uma resposta (retorna o valor direto)
    const response = await fetch(endpoint);
    // json transforma a resposta em obj javascript (porém também retorna uma promisse) 
    const json = await response.json();
    return json;
  // se não der certo o que ta no try, trata o erro dentro do catch
  } catch (error) {
    console.log(error);
  }

}

// se chamar a função normalmente assim:
// console.log(fetchCurrency('BRL'));   ->   o retorno vai ser uma promisse pq mesmo a função sendo async, o retorno é instantâneo. Para executar a função tem que colocar await na chamada tbm.
