const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const nomeEValor = {};
    data.species.forEach((element) => { (nomeEValor[element.name] = element.residents.length); });
    return nomeEValor;
  }
  const { specie, sex } = animal;
  const procurarEspecie = data.species.find((element) => element.name === specie);
  if (sex === undefined) {
    const quantDeCadaEspec = procurarEspecie.residents.length;
    return quantDeCadaEspec;
  }
  const especieESexo = procurarEspecie.residents.filter((element) => element.sex === sex);
  return especieESexo.length;
}

module.exports = countAnimals;
