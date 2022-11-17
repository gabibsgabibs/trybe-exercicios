// 1 - Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.
// 2 - Permita que o código seja executado através do comando npm run bmi.
// 3 - Instale o pacote readline-sync e adicione inputs de entrada para o usuário
// 4 - Altere o código da função main para que o peso possa ser um valor não inteiro (questionFloat)
// 5 - Além de imprimir o IMC na tela, imprima também em qual categoria ele se enquadra

const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const handleBMI = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;
  
  return bmi;
}

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

function main() {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
   const height = readline.questionInt('What\'s your height? (cm) ');
  
   const bmi = handleBMI(weight, height);
   const bmiResult = handleBMIResult(bmi);

  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(bmiResult);
}

main();