const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const pegarUmAnimal = data.species.find((element) => element.name === animal);
  const pegarAIdade = pegarUmAnimal.residents.every((element) => element.age > age);
  return pegarAIdade;
}

module.exports = getAnimalsOlderThan;
