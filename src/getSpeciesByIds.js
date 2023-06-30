const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  if (ids.length === 1) {
    const arrayIdDeUmAnimal = [data.species.find((element) => element.id === ids[0])];
    return arrayIdDeUmAnimal;
  }

  if (ids.length > 1) {
    const arrayIdDeMaisDeUmAnimal = data.species.filter((element) => ids.includes(element.id));
    return arrayIdDeMaisDeUmAnimal;
  }
}

module.exports = getSpeciesByIds;
