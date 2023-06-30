const data = require('../data/zoo_data');

function acharNomeDosAnimais(idDoAnimal) {
  const acharAnimalDosId = data.species.filter((element) =>
    idDoAnimal.includes(element.id));
  const acharONomeDosAnimais = acharAnimalDosId.map((element) =>
    element.name);
  const acharOLocalDosAnimais = acharAnimalDosId.map((element) =>
    element.location);
  return { acharONomeDosAnimais, acharOLocalDosAnimais };
}

function gerarObjetoDoFuncionario(name) {
  const procurarFuncionario = data.employees.find((element) =>
    element.firstName === name || element.lastName === name || element.id === name);
  const idDoFuncionario = procurarFuncionario.id;
  const nomeDoFuncionario = `${procurarFuncionario.firstName} ${procurarFuncionario.lastName}`;
  const idDoAnimal = procurarFuncionario.responsibleFor;
  const { acharONomeDosAnimais, acharOLocalDosAnimais } = acharNomeDosAnimais(idDoAnimal);
  const colocarDadosNoObjeto = {
    id: idDoFuncionario,
    fullName: nomeDoFuncionario,
    species: acharONomeDosAnimais,
    locations: acharOLocalDosAnimais,
  };
  return colocarDadosNoObjeto;
}

function gerarTodosOsFuncionários() {
  const gerarArrayDeFuncionarios = data.employees.map((element) =>
    gerarObjetoDoFuncionario(element.id));
  return gerarArrayDeFuncionarios;
}

function getEmployeesCoverage(objeto) {
  try {
    if (objeto === undefined) {
      return gerarTodosOsFuncionários();
    }
    const { name, id } = objeto;
    if (name !== undefined) {
      return gerarObjetoDoFuncionario(name);
    }
    if (id !== undefined) {
      return gerarObjetoDoFuncionario(id);
    }
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
