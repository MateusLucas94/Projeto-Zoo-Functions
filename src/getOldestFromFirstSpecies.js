const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const acharFuncionário = data.employees.find((element) => element.id === id);
  const acharEspécieDoFuncionário = data.species.find((element) =>
    element.id === acharFuncionário.responsibleFor[0]);
  const acharAnimalMaisVelho = acharEspécieDoFuncionário.residents.reduce((contador, element) => {
    if (element.age > contador.age) {
      return element;
    }
    return contador;
  });
  const { name, sex, age } = acharAnimalMaisVelho;
  return [name, sex, age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
