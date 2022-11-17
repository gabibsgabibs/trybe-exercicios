const { getPackage } = require('./npm');
const { askName } = require('./askName');

const main = async () => {
  const name = askName();

  const package = await getPackage(name);

  if(!package) {
    console.log(`${name} não é um pacote NPM!`)
  }
}

main();