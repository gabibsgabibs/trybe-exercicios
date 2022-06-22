// 5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto.

const techList = (techArr, name) => {
  if (techArr.length === 0) return 'Vazio!';

  const sortedArray = techArr.sort();
  const newTechList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    newTechList.push({
      tech: sortedArray[index],
      name,
    });
  }
  return newTechList
};

module.exports = techList;