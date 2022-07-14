window.onload = () => {
  setupHtmlElements();
};

// trata o botão
const setupHtmlElements = () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

// trata o input e chama o fetch
const handleSearchEvent = async () => {
  const currencyElement = document.getElementById('currency-input');
  const currencyValue = currencyElement.value;

  const object = await fetchCurrency(currencyValue);
  console.log(object);

  clearList();

  handleBaseCurrency(object.base);
  handleRates(object.rates);

  cleanCurrencyInput();
}

// limpa a lista (reset)
const clearList = () => {
  const currencyList = document.getElementById('currency-list');
  currencyList.innerHTML = "";
}

// limpa o input quando o resultado aparece
const cleanCurrencyInput = () => {
  const currencyElement = document.getElementById('currency-input');
  currencyElement.value = "";
}

//renderizar o titulo do 'Valores referentes a'
const handleBaseCurrency = (base) => {
  const baseElement = document.getElementById('base');
  baseElement.innerHTML = `Valores referentes à 1 ${base}`;
};

// pegar as taxas das moedas
const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates);
  
  ratesEntries.forEach((entry) => {
    const [ currency, rate ] = entry;
    renderRate(currency, rate);
  });
};

// renderizar a lista das taxas
const renderRate = (currency, rate) => {
  const currencyList = document.getElementById('currency-list');
  const fixedRate = rate.toFixed(2);
  
  const li = document.createElement('li');
  li.innerHTML = `<strong>${currency}:</strong> ${fixedRate}`

  currencyList.appendChild(li);
}
