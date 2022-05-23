function biggestName(names) {
  let verificaNome = '';
  for (let indice in names) {
    if (verificaNome.length < names[indice].length)
      verificaNome = names[indice];
  }
  return verificaNome;
}

console.log('O maior nome é '+ biggestName(['Gabriella', 'José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']) + '.');